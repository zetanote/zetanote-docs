# Get Note Tags

Fetch the tags on a note.

## Signature

```TypeScript
function getNoteTags(noteId: string): Promise<{
  [label: string]: {
    [fieldName: string]: any;
  };
}>;
```

## Parameters

- `noteId`: The ID of the note whose tags are being fetched.

## Returns

- Refer to [`getNodeTags`](/guide/zeta-api/query-api/get-node-tags).

## Examples

```TypeScript
const noteId = "123e4567-e89b-12d3-a456-426614174000";

const tags = await zeta.v1.query.getNoteTags(noteId);
```
