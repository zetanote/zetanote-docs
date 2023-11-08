# Save Note Stacks

This recipe allows you to easily pick up where you left off when you had a bunch of notes open in a stack. It includes 3 public scripts: `saveStack`, `listStacks`, and `loadStack`.

## `saveStack`

Calling `saveStack` saves the current note stack.

::: info
`saveStack` must be called inside a node stack.
:::

```TypeScript
async function (stackName) {
  const { getNoteIdByTitle } = zeta.v1.query;
  const { getNodeStack } = zeta.v1.context;
  const { bullet } = zeta.v1.element;

  const {
    createNote,
    updateNote,
    tagNote,
  } = zeta.v1.api;

  if (
    !stackName || typeof stackName !== "string"
  ) {
    throw new Error("Invalid stack name.");
  }

  const notes = (getNodeStack() || [])
    .filter(({ type }) => type === "Note");

  if (notes.length === 0) {
    throw new Error("No notes open in stack");
  }

  const title = `[Stack] ${stackName}`;

  let noteId = await getNoteIdByTitle(title);

  if (!noteId) {
    noteId = createNote({ title });

    tagNote(noteId, "Stack");
  }

  updateNote(noteId, {
    content: notes.map(({ id }) => bullet({
      code: true,
      text: id,
    })),
  });
}
```

For example, you can run `saveStack("Tasks")` in a code cell.

## `listStacks`

Calling `listStacks` lists the stacks that you have saved:

```TypeScript
async function () {
  const { getNodesByTag } = zeta.v1.query;
  const { setOutput } = zeta.v1.ui;

  const {
    paragraph,
    bullet,
  } = zeta.v1.element;

  const MAX_NUM_STACKS = 32;

  const nodes = getNodesByTag("Stack");
  const stackNames = [];

  // Fetch the names of all saved note stacks.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      /^\[Stack\]\s\w+/.test(node.title)
    ) {
      stackNames.push(node.title.slice(8));
    }

    if (stackNames.length >= MAX_NUM_STACKS) {
      break;
    }
  }

  if (!stackNames.length) {
    setOutput(paragraph(
      "You don't have any stacks."
    ));

    return;
  }

  setOutput(stackNames.map(
    (stackName) => bullet(stackName)
  ));
}
```

For example, you can run `listStacks()` in a code cell.

## `loadStack`

After calling `listStacks` to view your saved stacks, you can call `loadStack` to load one of them:

```TypeScript
async function (stackName) {
  const { openNodeStack } = zeta.v1.ui;

  const {
    getNoteIdByTitle,
    getNote,
  } = zeta.v1.query;

  if (
    !stackName || typeof stackName !== "string"
  ) {
    throw new Error("Invalid stack name.");
  }

  const noteId = await getNoteIdByTitle(
    `[Stack] ${stackName}`
  );

  if (!noteId) {
    throw new Error("Stack not found.");
  }

  const { content } = await getNote(noteId);

  const notes = content
    .map(({ text }) => text)
    .filter((id) => !!id)
    .map((id) => ({
      type: "Note",
      id,
    }));

  openNodeStack(notes);
}
```

For example, you can run `loadStack("Tasks")` in a code cell.
