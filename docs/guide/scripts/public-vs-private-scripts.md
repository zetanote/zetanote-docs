# Public vs. Private Scripts

Zetanote makes a distinction between public and private scripts. Whether a script is public or private is determined by its name.

## Public scripts

If a script's name doesn't start with an underscore (`_`), it's a public script. By this logic, scripts without a name are also considered to be public. Public scripts can call private scripts, but they may not call other public scripts.

## Private scripts

If a script's name starts with an underscore (`_`), it's a private script. Note that private scripts cannot call public scripts nor other private scripts. Subroutines can be expressed as private scripts and combined inside a public script, allowing the user to implement sophisticated workflows in an organized manner.

::: info
Private scripts cannot be called directly inside executable blocks such as a code cell. They must be called through a public script.
:::

## Examples

We can rewrite the `todo` script from a [previous section](/guide/scripts/writing-scripts) using public and private scripts.

First, we can factor out a subroutine for ensuring that a note with a certain title exists. We'll call this private script `_ensureNoteWithTitle`:

```TypeScript
async function (title) {
  const { getNoteIdByTitle } = zeta.v1.query;
  const { createNote } = zeta.v1.api;

  let noteId = await getNoteIdByTitle(title);

  if (!noteId) {
    noteId = createNote({ title });
  }

  return noteId;
}
```

Then, we can call it inside the `todo` public script:

```TypeScript
async function () {
  const { openNote } = zeta.v1.ui;
  const { tagNote } = zeta.v1.api;

  const date = new Date()
    .toLocaleDateString("sv");

  const noteId = await _ensureNoteWithTitle(
    `Todo ${date}`
  );

  tagNote(noteId, "Todo");
  openNote(noteId, true);
}
```

Now our code is more readable and reusable.

## Combining building blocks

You can combine the building blocks of scripts - the Zeta API methods - in all kinds of creative and useful ways. See what methods are at your disposal in the [Zeta API](/guide/zeta-api/overview).
