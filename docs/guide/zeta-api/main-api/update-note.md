# Update Note

Update an existing note.

## Signature

```TypeScript
function updateNote(
  id: string,
  update: {
    emoji?: string;
    title?: string;
    content?: Element | Element[];
  }
): void;
```

## Parameters

- `id`: The ID of the note being updated.
- `update`: The update object.

::: warning
Specifying `content` in the update object will **overwrite** the note's entire content.
:::

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.updateNote(noteId, {
  emoji: "🌲",
  title: "New title",
  content: zeta.v1.element.paragraph("New content."),
});
```
