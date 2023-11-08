# Prepend

Insert elements to the top of the current note.

## Signature

```TypeScript
function prepend(elements: Element | Element[]): void;
```

## Parameters

- `elements`: One or more elements to prepend. Refer to the [Element API](/guide/zeta-api/element-api/overview).

## Returns

- Void.

## Examples

```TypeScript
const { h1, todo } = zeta.v1.element;

zeta.v1.api.prepend([
  h1("Paper checklist"),
  todo("Thoroughly read paper."),
  todo("Implement the algorithm."),
  todo("Create flashcards of key concepts."),
]);
```
