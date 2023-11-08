# Pin Node

Pin a node to the top of the sidebar.

## Signature

```TypeScript
function pinNode(node: {
  type: "Note" | "Script";
  id: string;
}): void;
```

## Parameters

- `node`: The node being pinned.

## Returns

- Void.

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

zeta.v1.api.pinNode(node);
```
