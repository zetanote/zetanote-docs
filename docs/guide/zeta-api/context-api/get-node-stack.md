# Get Node Stack

Get the node stack in which the script is being executed.

## Signature

```TypeScript
function getNodeStack(): {
  type: "Note" | "Script";
  id: string;
}[] | null;
```

## Parameters

- None.

## Returns

- A list of nodes. If the script is not being executed from within a node stack, the returned value is `null`.

## Examples

```TypeScript
const nodes = zeta.v1.context.getNodeStack();
```
