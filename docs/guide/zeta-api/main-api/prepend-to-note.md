# Prepend to Note

Insert elements to the top of a note.

## Signature

```TypeScript
function prependToNote(
  id: string,
  elements: Element | Element[]
): void;
```

## Parameters

- `id`: The ID of the note being updated.
- `elements`: One or more elements to prepend. Refer to the [Element API](/guide/zeta-api/element-api/overview).

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";
const { h1, todo } = zeta.v1.element;

zeta.v1.api.prependToNote(
  noteId,
  [
    h1("Paper checklist"),
    todo("Thoroughly read paper."),
    todo("Implement the algorithm."),
    todo("Create flashcards of key concepts."),
  ]
);
```
