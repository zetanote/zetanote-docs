# Update Node Tag

Update a tag on a node. The tag must already exist on the node (refer to [`tagNode`](/guide/zeta-api/main-api/tag-node)).

## Signature

```TypeScript
function updateNodeTag(
  node: {
    type: "Note" | "Script";
    id: string;
  },
  label: string,
  update: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `node`: The node whose tag is being updated.
- `label`: The label of the tag being updated.
- `update`: The update object. Refer to the section below.

## Update object

The keys of the update object should be the names of the fields being updated, and each value should have a type corresponding to the field type:

- Boolean: `boolean`
- Integer: `number`
- Float: `number`
- String: `string`
- Date: `Date`
- Select: `string[]`
- Multi Select: `string[]`

::: info
Both field names and select option values are case-insensitive.
:::

## Returns

- Void.

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

zeta.v1.api.updateNodeTag(node, "Task", {
  "Updated": new Date(),
  "Status": ["Done"],
});
```
