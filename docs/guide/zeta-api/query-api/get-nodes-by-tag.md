# Get Nodes by Tag

Fetch all nodes with a tag.

## Signature

```TypeScript
function getNodesByTag(label: string): AsyncGenerator<{
  type: "Note";
  id: string;
  emoji: string | null;
  title: string;
  tags: {
    [label: string]: {
      [fieldName: string]: any;
    };
  };
} | {
  type: "Script";
  id: string;
  emoji: string | null;
  name: string | null;
  tags: {
    [label: string]: {
      [fieldName: string]: any;
    };
  };
}, void, unknown>;
```

## Parameters

- `label`: The label of the tag for which nodes are being fetched.

## Returns

- An async generator of nodes with the specified tag. The nodes are ordered from most recently updated to least recently updated. Each node has a `tags` property that is an object with one key - the specified tag's label. The one value in that object is the field values record. Refer to [`getNodeTags`](/guide/zeta-api/query-api/get-node-tags) for more details.

## Examples

```TypeScript
const nodes = zeta.v1.query.getNodesByTag("Task");

for await (const node of nodes) {
  //
}
```
