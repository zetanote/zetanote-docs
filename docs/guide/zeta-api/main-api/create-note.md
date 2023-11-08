# Create Note

Create a new note.

## Signature

```TypeScript
function createNote(props?: {
  emoji?: string;
  title?: string;
  content?: Element | Element[];
}): string;
```

## Parameters

- `props`: Optional props to initialize the note.

## Returns

- The `string` ID of the newly created note.

## Examples

```TypeScript
const noteId = zeta.v1.api.createNote();
```
