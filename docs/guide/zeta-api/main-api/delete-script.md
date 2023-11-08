# Delete Script

Delete a script.

::: danger
Deleted scripts cannot be recovered.
:::

## Signature

```TypeScript
function deleteScript(id: string): void;
```

## Parameters

- `id`: The ID of the script being deleted.

## Returns

- Void.

## Examples

```TypeScript
const scriptId = "123e4567-e89b-12d3-a456-426614174000";

zeta.v1.api.deleteScript(scriptId);
```
