# Tag Note

Add a tag to a note.

## Signature

```TypeScript
function tagNote(
  id: string,
  label: string,
  props?: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `id`: The ID of the note being tagged.
- `label`: The label of the tag being added to the note.
- `props`: Optional props to initialize the tag. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.tagNote(noteId, "Task");
```
