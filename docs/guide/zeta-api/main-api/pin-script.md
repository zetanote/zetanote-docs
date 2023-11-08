# Pin Script

Pin a script to the top of the sidebar.

## Signature

```TypeScript
function pinScript(id: string): void;
```

## Parameters

- `id`: The ID of the script being pinned.

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.pinScript(scriptId);
```
