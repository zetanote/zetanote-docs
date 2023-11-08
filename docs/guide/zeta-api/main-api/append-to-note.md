# Append to Note

Insert elements to the bottom of a note.

## Signature

```TypeScript
function appendToNote(
  id: string,
  elements: Element | Element[]
): void;
```

## Parameters

- `id`: The ID of the note being updated.
- `elements`: One or more elements to append. Refer to the [Element API](/guide/zeta-api/element-api/overview).

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.appendToNote(
  noteId,
  zeta.v1.element.todo("Book flight to Japan.")
);
```
