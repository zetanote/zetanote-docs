# Delete Note

Delete a note.

::: info
Deleted notes can be recovered within 30 days after deletion.
:::

## Signature

```TypeScript
function deleteNote(id: string): void;
```

## Parameters

- `id`: The ID of the note being deleted.

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.deleteNote(noteId);
```
