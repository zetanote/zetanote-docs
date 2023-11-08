# Open Node

Open a node.

## Signature

```TypeScript
function openNode(
  node: {
    type: "Note" | "Script";
    id: string;
  },
  isModal: boolean = false
): void;
```

## Parameters

- `node`: The node being opened.
- `isModal`: Optional flag for whether the node should be opened as a modal.

## Returns

- Void.

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

zeta.v1.ui.openNode(node);
```
