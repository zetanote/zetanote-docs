# Carry Over Todos

You can enhance the [basic `todo` script from the guide](/guide/scripts/writing-scripts) so that unfinished items from the previous todo list carry over to the new one:

```TypeScript
async function () {
  const { quote } = zeta.v1.element;
  const { openNote } = zeta.v1.ui;
  const { get } = zeta.v1.http;
  const { _ } = zeta.v1.common;

  const {
    getNoteIdByTitle,
    getNodesByTag,
    getNote,
  } = zeta.v1.query;

  const {
    createNote,
    updateNote,
    tagNote,
  } = zeta.v1.api;

  const todayNoteTitle = `Todo ${
    new Date().toLocaleDateString("sv")
  }`;

  const todayNoteId = await getNoteIdByTitle(
    todayNoteTitle
  );

  // If a todo list already exists
  // for today, simply open it.
  if (todayNoteId) {
    openNote(todayNoteId);

    return;
  }

  const nodes = getNodesByTag("Todo");
  const notes = [];

  // Fetch all previous todo lists.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      /^Todo \d{4}-\d{2}-\d{2}$/.test(node.title)
    ) {
      const date = node.title.slice(5);
      const time = new Date(date).getTime();

      notes.push({
        id: node.id,
        time,
      });
    }
  }

  const { data } = await get([
    "https://api.quotable.io/quotes/random",
    "?tags=inspirational",
  ].join(""));

  const res = data[0];

  const inspirationalQuote =
    quote(`"${res.content}" - ${res.author}`);

  // If there are no previous todo lists,
  // just create a new one and open it.
  if (!notes.length) {
    const newNoteId = createNote({
      title: todayNoteTitle,
      content: inspirationalQuote,
    });

    tagNote(newNoteId, "Todo");
    openNote(newNoteId);

    return;
  }

  // Get the latest todo list note ID.
  const oldNoteId = _.sortBy(
    notes,
    ({ time }) => time
  )[notes.length - 1].id;

  const { content } = await getNote(oldNoteId);

  let isParentDone = false;

  // Partition todos by whether
  // the top-level todo is done.
  const [
    oldContent,
    newContent,
  ] = _.partition(
    content,
    (element) => {
      if (element.type !== "Todo") {
        return true;
      }

      if (element.data.indent > 0) {
        return isParentDone;
      }

      isParentDone = element.data.done;

      return isParentDone;
    }
  );

  // Only keep finished items
  // in the latest todo list.
  updateNote(oldNoteId, {
    content: oldContent,
  });

  // Create a new note by carrying
  // over all the unfinished items.
  const newNoteId = createNote({
    title: todayNoteTitle,

    content: [
      inspirationalQuote,
      ...newContent,
    ],
  });

  tagNote(newNoteId, "Todo");
  openNote(newNoteId);
}
```

Now, running `todo()` in a code cell will move unfinished items from the previous todo list to the new todo list for today.
