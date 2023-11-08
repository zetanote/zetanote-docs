# Get Pinned Nodes

Fetch all pinned nodes.

## Signature

```TypeScript
function getPinnedNodes(): Promise<{
  type: "Note" | "Script";
  id: string;
}[]>;
```

## Parameters

- None.

## Returns

- A list of all pinned nodes.

## Examples

```TypeScript
const nodes = await zeta.v1.query.getPinnedNodes(noteId);
```
