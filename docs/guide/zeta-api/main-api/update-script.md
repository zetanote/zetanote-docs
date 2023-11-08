# Update Script

Update an existing script.

## Signature

```TypeScript
function updateScript(
  id: string,
  update: {
    emoji?: string;
    name?: string;
    code?: string;
  }
): void;
```

## Parameters

- `id`: The ID of the script being updated.
- `update`: The update object.

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.updateScript(scriptId, {
  emoji: "🦾",
  name: "newName",
  code: "function () {}",
});
```
