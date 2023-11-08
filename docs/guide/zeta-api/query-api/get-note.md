# Get Note

Fetch a note by its ID.

## Signature

```TypeScript
function getNote(id: string): Promise<{
  id: string;
  emoji: string | null;
  title: string;
  content: Element[];
  updatedAt: number;
} | null>;
```

## Parameters

- `id`: The ID of the note being fetched.

## Returns

- The fetched note.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

const note = await zeta.v1.query.getNote(noteId);
```
