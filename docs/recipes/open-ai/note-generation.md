# Note Generation

Once you have created the [prerequisite scripts](/recipes/open-ai/prerequisites), you can use ChatGPT to generate a note. To do so, create a script called `generate`:

```TypeScript
async function (inputTitle) {
  const { getNote } = zeta.v1.context;
  const { updateNote } = zeta.v1.api;

  const {
    title: noteTitle,
    id,
  } = getNote();

  const title = inputTitle || noteTitle;

  if (!title) {
    throw new Error("Title must be specified.");
  }

  const systemMsgs = [
    "Tell me about the following topic.",
    "Summarize it in a few short paragraphs.",
  ];

  const text = await _openAi(_chat({
    systemMsgs,
    content: title,
  }));

  const content = _deserialize(text);

  updateNote(id, {
    title,
    content,
  });
}
```

You can call this script using a code cell (e.g. `generate("Emergence")`) or using a shortcut cell. If you use a shortcut cell, make sure that the note that you call it from has a title - it will be used as the subject during note generation.

::: warning
This script will replace the content of the note that it's called from. You can change this behavior by calling [`insert`](/guide/zeta-api/main-api/insert) instead of [`updateNote`](/guide/zeta-api/main-api/update-note).
:::
