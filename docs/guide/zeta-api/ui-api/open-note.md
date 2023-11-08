# Open Note

Open a note.

## Signature

```TypeScript
function openNote(
  id: string,
  isModal: boolean = false
): void;
```

## Parameters

- `id`: The ID of the note being opened.
- `isModal`: Optional flag for whether the note should be opened as a modal.

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.ui.openNote("123e4567-e89b-12d3-a456-426614174000");
```
