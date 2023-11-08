# Get Tags

Fetch the tags on the current note.

## Signature

```TypeScript
function getTags(): Promise<{
  [label: string]: {
    [fieldName: string]: any;
  };
}>;
```

## Parameters

- None.

## Returns

- Refer to [`getNodeTags`](/guide/zeta-api/query-api/get-node-tags).

## Examples

```TypeScript
const tags = await zeta.v1.query.getTags();
```
