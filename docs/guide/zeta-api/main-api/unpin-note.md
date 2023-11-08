# Unpin Note

Unpin a note from the top of the sidebar.

## Signature

```TypeScript
function unpinNote(id: string): void;
```

## Parameters

- `id`: The ID of the note being unpinned.

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.unpinNote(noteId);
```
