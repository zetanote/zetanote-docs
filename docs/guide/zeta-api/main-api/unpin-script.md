# Unpin Script

Unpin a script from the top of the sidebar.

## Signature

```TypeScript
function unpinScript(id: string): void;
```

## Parameters

- `id`: The ID of the script being unpinned.

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.unpinScript(scriptId);
```
