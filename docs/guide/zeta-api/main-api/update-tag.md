# Update Tag

Update a tag on the current note. The tag must already exist on the note (refer to [`tag`](/guide/zeta-api/main-api/tag)).

## Signature

```TypeScript
function updateTag(
  label: string,
  update: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `label`: The label of the tag being updated.
- `update`: The update object. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.api.updateTag("Task", {
  "Updated": new Date(),
  "Status": ["Done"],
});
```
