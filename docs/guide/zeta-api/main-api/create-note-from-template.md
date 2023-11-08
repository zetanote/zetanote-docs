# Create Note from Template

Create a note using a template note. If the template note contains tokens in the form of `{token}`, they will be interpolated based on the `props` object that is passed in. For instance, if the `props` object has a key `"date"` mapping to the value `"2023-11-05"`, then the token `{date}` in the template note will be replaced with `2023-11-05` in the newly created note.

If the `props` argument is omitted, this method simply clones the template note.

## Signature

```TypeScript
function createNoteFromTemplate(
  id: string,
  props: {
    [key: string]: string;
  } = {}
): string;
```

## Parameters

- `id`: The ID of the template note.
- `props`: Mappings used to interpolate values into placeholder tokens.

## Returns

- The `string` ID of the newly created note.

## Examples

```TypeScript
const srcNoteId = "123e4567-e89b-12d3-a456-426614174000";

const noteId = zeta.v1.api.createNoteFromTemplate(srcNoteId, {
  date: "2023-11-05",
});
```
