# Tag Script

Add a tag to a script.

## Signature

```TypeScript
function tagScript(
  id: string,
  label: string,
  props?: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `id`: The ID of the script being tagged.
- `label`: The label of the tag being added to the script.
- `props`: Optional props to initialize the tag. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.tagScript(scriptId, "Task");
```
