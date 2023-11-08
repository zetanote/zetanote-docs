# Update Script Tag

Update a tag on a script. The tag must already exist on the script (refer to [`tagScript`](/guide/zeta-api/main-api/tag-script)).

## Signature

```TypeScript
function updateScriptTag(
  id: string,
  label: string,
  update: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `id`: The ID of the script whose tag is being updated.
- `label`: The label of the tag being updated.
- `update`: The update object. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.updateScriptTag(scriptId, "Daily", {
  "Last Run": new Date(),
});
```
