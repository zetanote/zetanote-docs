# Update Note Tag

Update a tag on a note. The tag must already exist on the note (refer to [`tagNote`](/guide/zeta-api/main-api/tag-note)).

## Signature

```TypeScript
function updateNoteTag(
  id: string,
  label: string,
  update: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `id`: The ID of the note whose tag is being updated.
- `label`: The label of the tag being updated.
- `update`: The update object. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.updateNoteTag(noteId, "Task", {
  "Updated": new Date(),
  "Status": ["Done"],
});
```
