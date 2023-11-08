# Unpin Node

Unpin a node from the top of the sidebar.

## Signature

```TypeScript
function unpinNode(node: {
  type: "Note" | "Script";
  id: string;
}): void;
```

## Parameters

- `node`: The node being unpinned.

## Returns

- Void.

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

zeta.v1.api.unpinNode(node);
```
