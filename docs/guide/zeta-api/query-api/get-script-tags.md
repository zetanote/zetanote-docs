# Get Script Tags

Fetch the tags on a script.

## Signature

```TypeScript
function getScriptTags(scriptId: string): Promise<{
  [label: string]: {
    [fieldName: string]: any;
  };
}>;
```

## Parameters

- `scriptId`: The ID of the script whose tags are being fetched.

## Returns

- Refer to [`getNodeTags`](/guide/zeta-api/query-api/get-node-tags).

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

const tags = await zeta.v1.query.getScriptTags(scriptId);
```
