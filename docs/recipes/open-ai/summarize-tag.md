# Summarize Tag

Once you have created the [prerequisite scripts](/recipes/open-ai/prerequisites), you can use ChatGPT to summarize a collection of notes with the same tag. To do so, create a script called `summarizeTag`:

```TypeScript
async function (tag) {
  const { createNote } = zeta.v1.api;
  const { openNote } = zeta.v1.ui;

  const {
    getNodesByTag,
    getNote,
  } = zeta.v1.query;

  // You can increase this if you're using
  // a model with a larger context window.
  const MAX_NUM_NOTES = 32;

  const SEP_TOKEN = "---";

  const nodes = getNodesByTag(tag);
  const promises = [];

  for await (const node of nodes) {
    if (node.type !== "Note") {
      continue;
    }

    promises.push(getNote(node.id).then(
      ({ title, content }) => [
        title,
        _serialize(content),
      ].join("\n\n")
    ));

    if (promises.length >= MAX_NUM_NOTES) {
      break;
    }
  }

  const results = await Promise.all(promises);

  const systemMsg = [
    "Summarize the following notes.",
    `The notes are separated by '${SEP_TOKEN}'.`,
  ].join(" ");

  const text = await _openAi(_chat({
    systemMsgs: [systemMsg],

    content:
      results.join(`\n\n${SEP_TOKEN}\n\n`),
  }));

  const noteId = createNote({
    title: `Summary of '${tag}'`,
    content: _deserialize(text),
  });

  openNote(noteId);
}
```

You can call this script using a code cell (e.g. `summarizeTag("Docker")`).
