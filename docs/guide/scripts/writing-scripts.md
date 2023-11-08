# Writing Scripts

A script can be created by clicking the "Create" button in the top-right corner of the app and then selecting "Create script". Scripts can be given a name, which allows us to invoke them. They are written using JavaScript, and can call methods in the [Zeta API](/guide/zeta-api/overview) to automate workflows. Here is an example script:

```TypeScript
async function () {
  const { getNoteIdByTitle } = zeta.v1.query;
  const { openNote } = zeta.v1.ui;

  const {
    createNote,
    tagNote,
  } = zeta.v1.api;

  // Get today's date in YYYY-MM-DD format.
  const date = new Date()
    .toLocaleDateString("sv");

  const title = `Todo ${date}`;

  // Check if there is already
  // a todo list for today.
  let noteId = await getNoteIdByTitle(title);

  // If there isn't, create a new
  // note and tag it with "Todo".
  if (!noteId) {
    noteId = createNote({ title });

    tagNote(noteId, "Todo");
  }

  // Open the note in a modal.
  openNote(noteId, true);
}
```

We'll name this script `todo`, and see how we can invoke it in the [next section](/guide/scripts/running-scripts).
