# Tag Node

Add a tag to a node.

## Signature

```TypeScript
function tagNode(
  node: {
    type: "Note" | "Script";
    id: string;
  },
  label: string,
  props?: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `node`: The node being tagged.
- `label`: The label of the tag being added to the node.
- `props`: Optional props to initialize the tag. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

zeta.v1.api.tagNode(node, "Task");
```
