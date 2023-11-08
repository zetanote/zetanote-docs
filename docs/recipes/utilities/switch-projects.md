# Switch Projects

Extending upon the ["Save Note Stacks" recipe](/recipes/utilities/save-note-stacks), this recipe allows you to seamlessly switch between entire projects. You can save your workspace state as a "project" and return to that exact state after working on something else. Concretely, to save a project means to save the current node stack, pinned nodes, shortcut script IDs, and theme.

::: info
Other note-taking apps usually provide the ability to switch between workspaces. However, while that helps keep notes organized and separated by project, the workspaces become _siloed_.

For instance, when you search for notes in one workspace, you won't be able to access notes from another workspace. This recipe gives you the best of both worlds - distinct workspaces that all belong to the same centralized knowledge base.
:::

## `Project` tag

First, create a `Project` tag by adding it to any note. Then, open the tag by clicking on it and add the following fields:

- `Theme`
  - Type: `String`
- `Active`
  - Type: `Boolean`

## `_saveProject`

First, implement a private script called `_saveProject` for saving the workspace state:

```TypeScript
async function (projectName) {
  const {
    getContainer,
    getNodeStack,
    getSettings,
  } = zeta.v1.context;

  const {
    paragraph,
    bullet,
    h1,
  } = zeta.v1.element;

  const {
    getNoteIdByTitle,
    getPinnedNodes,
    getNodesByTag,
  } = zeta.v1.query;

  const {
    updateNoteTag,
    createNote,
    updateNote,
    tagNote,
  } = zeta.v1.api;

  const nodes = getNodesByTag("Project");

  let activeProject = null;
  let noteId = null;

  // Fetch the currently active project.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      node.tags["Project"]["Active"] &&
      /^\[Project\]\s\w+/.test(node.title)
    ) {
      activeProject = node;

      break;
    }
  }

  if (activeProject) {
    const { id, title } = activeProject;

    // If a project name wasn't passed
    // in, overwrite the active project.
    if (!projectName) {
      projectName = title.slice(10);
      noteId = id;
    }

    // Mark the active project as inactive.
    updateNoteTag(id, "Project", {
      "Active": false,
    });
  }

  if (
    !projectName ||
    typeof projectName !== "string"
  ) {
    throw new Error("Invalid project name.");
  }

  const title = `[Project] ${projectName}`;

  noteId ||= await getNoteIdByTitle(title);

  // If the project with the specified
  // name doesn't exist yet, create it.
  if (!noteId) {
    noteId = createNote({ title });

    tagNote(noteId, "Project");
  }

  // Begin saving the current workspace state.

  const pinnedNodes = await getPinnedNodes();

  const nodeStack = getNodeStack() || [
    getContainer(),
  ];

  const {
    shortcutScriptIds,
    theme,
  } = getSettings();

  const getCodeBullet = (node) => bullet({
    text: `${node.type}:${node.id}`,
    code: true,
  });

  updateNote(noteId, {
    content: [
      h1("Node stack"),

      ...nodeStack.map(getCodeBullet),

      paragraph(""),

      h1("Pinned nodes"),

      ...pinnedNodes.map(getCodeBullet),

      paragraph(""),

      h1("Shortcut script IDs"),

      ...shortcutScriptIds.map((id) => bullet({
        code: true,
        text: id,
      })),
    ],
  });

  // Mark the saved project as active.
  updateNoteTag(noteId, "Project", {
    "Active": true,
    "Theme": theme,
  });
}
```

## `_loadProject`

Then, implement another private script called `_loadProject` for loading saved projects:

```TypeScript
async function (projectName) {
  const { openNodeStack } = zeta.v1.ui;

  const {
    getNoteIdByTitle,
    getPinnedNodes,
    getNodesByTag,
    getNoteTags,
    getNote,
  } = zeta.v1.query;

  const {
    updateSettings,
    updateNoteTag,
    unpinNode,
    pinNode,
  } = zeta.v1.api;

  if (
    !projectName ||
    typeof projectName !== "string"
  ) {
    throw new Error("Invalid project name.");
  }

  const title = `[Project] ${projectName}`;
  const noteId = await getNoteIdByTitle(title);

  if (!noteId) {
    throw new Error(
      `Project not found: '${projectName}'.`
    );
  }

  const nodes = getNodesByTag("Project");

  let activeProject = null;

  // Fetch the currently active project.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      node.tags["Project"]["Active"] &&
      /^\[Project\]\s\w+/.test(node.title)
    ) {
      activeProject = node;

      break;
    }
  }

  if (activeProject) {
    // If the project being loaded is
    // currently active, do nothing.
    if (activeProject.id === noteId) {
      return;
    }

    // Mark the active project as inactive.
    updateNoteTag(activeProject.id, "Project", {
      "Active": false,
    });
  }

  const [
    { content },
    pinnedNodes,
    tags,
  ] = await Promise.all([
    getNote(noteId),
    getPinnedNodes(),
    getNoteTags(noteId),
  ]);

  const props = {};

  let current = null;

  // Organize elements by heading.
  content.forEach((element) => {
    if (element.type === "Heading") {
      current = [];
      props[element.text] = current;
    } else if (element.text) {
      current.push(element.text);
    }
  });

  // Begin loading the saved workspace state.

  const nodeStack = props["Node stack"]
    .map((text) => {
      const [type, id] = text.split(":");

      return { type, id };
    });

  openNodeStack(nodeStack);

  pinnedNodes.forEach(unpinNode);

  props["Pinned nodes"].forEach((text) => {
    const [type, id] = text.split(":");

    pinNode({ type, id });
  });

  updateSettings({
    theme: tags["Project"]["Theme"],

    shortcutScriptIds: props[
      "Shortcut script IDs"
    ],
  });

  // Mark the loaded project as active.
  updateNoteTag(noteId, "Project", {
    "Active": true,
  });
}
```

## `saveProject`

Now that the private scripts have been prepared, implement the first public script called `saveProject` that simply calls its private equivalent:

```TypeScript
async function (projectName) {
  await _saveProject(projectName);
}
```

Running `saveProject("Project A")` in a code cell will save the current workspace state as "Project A".

## `listProjects`

Similar to the ["Save Note Stacks" recipe](/recipes/utilities/save-note-stacks#liststacks), implement a public script called `listProjects`:

```TypeScript
async function () {
  const { getNodesByTag } = zeta.v1.query;
  const { setOutput } = zeta.v1.ui;

  const {
    paragraph,
    bullet,
  } = zeta.v1.element;

  const MAX_NUM_PROJECTS = 32;

  const nodes = getNodesByTag("Project");
  const projectNames = [];

  let activeProjectName = null;

  // Fetch the names of all saved projects.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      /^\[Project\]\s\w+/.test(node.title)
    ) {
      const projectName = node.title.slice(10);

      projectNames.push(projectName);

      if (node.tags["Project"]["Active"]) {
        activeProjectName = projectName;
      }
    }

    if (
      projectNames.length >= MAX_NUM_PROJECTS
    ) {
      break;
    }
  }

  if (!projectNames.length) {
    setOutput(paragraph(
      "You don't have any projects."
    ));

    return;
  }

  setOutput(projectNames.map((projectName) => {
    return projectName === activeProjectName
      ? bullet({
        text: projectName,
        bold: true,
      })
      : bullet(projectName);
  }));
}
```

Running `listProjects()` in a code cell will list all saved projects.

## `loadProject`

Finally, implement a public script called `loadProject`:

```TypeScript
async function (projectName) {
  await _saveProject();
  await _loadProject(projectName);
}
```

Running `loadProject("Project A")` will load the saved workspace state for "Project A".

::: info
The reason why we implemented the two private scripts, `_saveProject` and `_loadProject`, is so that the public script `loadProject` can save the workspace state of the currently active project before loading another project.
:::

## Next steps

It's possible to make switching projects even more convenient by creating scripts that are specific to each project. For example, you can create a public script called `projectA` that switches to "Project A":

```TypeScript
async function () {
  await _saveProject();
  await _loadProject("Project A");
}
```

Making this script a shortcut allows you to switch to "Project A" with the click of a button, without having to type `loadProject("Project A")` in a code cell.
