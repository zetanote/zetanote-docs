# Prompt Templates

Once you have created the [prerequisite scripts](/recipes/open-ai/prerequisites), you can use Zetanote as a _prompt engine_ for ChatGPT. To get started, run the following snippet in a code cell:

```TypeScript
const { createNote } = zeta.v1.api;

const {
  paragraph,
  bullet,
  h1,
} = zeta.v1.element;

createNote({
  title: "Blog post prompt template",

  content: paragraph([
    "Write a blog post about '{topic}'.",
    "Highlight its relevance in the context",
    "of '{context}', accounting for factors",
    "like {factors}.",
  ].join(" ")),
});

createNote({
  title: "Blog post prompt form",

  content: [
    h1("Topic"),
    paragraph("<topic>"),
    paragraph(""),
    h1("Context"),
    paragraph("<context for discussion>"),
    paragraph(""),
    h1("Factors"),
    bullet("<factor 1>"),
    bullet("<factor 2>"),
    bullet("<factor 3>"),
    paragraph(""),
  ],
});
```

That will create two notes for generating blog posts using ChatGPT.

Next, create a public script called `generateBlogPost`:

```TypeScript
async function () {
  const { updateNote } = zeta.v1.api;

  const {
    getNote: getCurrentNote,
  } = zeta.v1.context;

  const {
    getNoteIdByTitle,
    getNote,
  } = zeta.v1.query;

  const {
    id,
    content,
  } = getCurrentNote();

  const props = {};

  let current = null;

  // Organize elements by heading.
  content.forEach((element) => {
    if (element.type === "Heading") {
      current = [];
      props[element.text] = current;
    } else if (
      element.type !== "Button" &&
      element.text
    ) {
      current.push(element.text);
    }
  });

  const template = await getNoteIdByTitle(
    "Blog post prompt template"
  ).then((id) => getNote(id).then(
    ({ content }) => _serialize(content)
  ));

  const topic = props["Topic"][0];
  const context = props["Context"][0];

  const factors = props["Factors"]
    .map((factor) => `'${factor}'`)
    .join(" and ");

  const text = await _openAi(_chat({
    content: template
      .replace("{topic}", topic)
      .replace("{context}", context)
      .replace("{factors}", factors),
  }));

  updateNote(id, {
    title: topic,
    content: _deserialize(text),
  });
}
```

Finally, create another public script called `blogPost`:

```TypeScript
async function () {
  const { button } = zeta.v1.element;
  const { createNote } = zeta.v1.api;
  const { openNote } = zeta.v1.ui;

  const {
    getScriptIdByName,
    getNoteIdByTitle,
    getNote,
  } = zeta.v1.query;

  const [
    scriptId,
    content,
  ] = await Promise.all([
    getScriptIdByName("generateBlogPost"),

    getNoteIdByTitle(
      "Blog post prompt form"
    ).then((id) => getNote(id).then(
      ({ content }) => content
    )),
  ]);

  const noteId = createNote({
    title: "New blog post",

    content: content.concat([button({
      label: "Generate blog post",
      scriptId,
    })]),
  });

  openNote(noteId);
}
```

Now, when you run `blogPost` through a code cell or a shortcut cell, that will create a new blog post form for you to fill out. For example, you can fill it out as follows:

::: info New blog post
### Topic
Transfer learning

### Context
Natural language processing

### Factors
- Large language models
- Organizational data
- Saving resources
:::

When you click the "Generate blog post" button at the end of the form, it will generate a new blog post using the prompt template and information you provided. You can edit the prompt template in the note titled "Blog post prompt template" as you see fit.
