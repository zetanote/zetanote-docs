# Open Script

Open a script.

## Signature

```TypeScript
function openScript(
  id: string,
  isModal: boolean = false
): void;
```

## Parameters

- `id`: The ID of the script being opened.
- `isModal`: Optional flag for whether the script should be opened as a modal.

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.ui.openScript("123e4567-e89b-12d3-a456-426614174000");
```
