# Open Node Stack

Open a stack of nodes.

## Signature

```TypeScript
function openNodeStack(nodes: {
  type: "Note" | "Script";
  id: string;
}[]): void;
```

## Parameters

- `nodes`: A list of nodes being opened as a stack.

## Returns

- Void.

## Examples

```TypeScript
const nodes = [{
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
}, {
  type: "Script",
  id: "123e4567-e89b-12d3-a456-426614174001",
}];

zeta.v1.ui.openNodeStack(nodes);
```
