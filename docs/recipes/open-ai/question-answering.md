# Question Answering

Once you have created the [prerequisite scripts](/recipes/open-ai/prerequisites), you can use ChatGPT to answer questions using your own knowledge base. To do so, create a script called `answer`:

```TypeScript
async function (tag, question) {
  const { setOutput } = zeta.v1.ui;

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
    "Answer the question based on the following",
    ` notes separated by '${SEP_TOKEN}':\n\n`,
    results.join(`\n\n${SEP_TOKEN}\n\n`),
  ].join("");

  const text = await _openAi(_chat({
    systemMsgs: [systemMsg],
    content: question,
  }));

  setOutput(_deserialize(text));
}
```

You can call this script using a code cell:

```TypeScript
answer("Redis", "How can I prevent memory leaks?")
```

This allows you to query your unique knowledge base, where ChatGPT can give you an answer that may not be readily available on the web.
