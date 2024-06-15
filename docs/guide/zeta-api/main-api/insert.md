# Insert

Insert elements at the current position of the executable block (e.g. code cell).

## Signature

```TypeScript
function insert(
  elements: Element | Element[],
  isAbove: boolean = false
): void;
```

## Parameters

- `elements`: One or more elements to insert. Refer to the [Element API](/guide/zeta-api/element-api/overview).
- `isAbove`: Optional flag for whether the elements should be inserted above or below the executable block.

## Returns

- Void.

## Examples

```TypeScript
const { todo } = zeta.v1.element;

zeta.v1.api.insert([
  todo("Thoroughly read paper."),
  todo("Implement the algorithm."),
  todo("Create flashcards of key concepts."),
]);
```
