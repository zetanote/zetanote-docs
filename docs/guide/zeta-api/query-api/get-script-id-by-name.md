# Get Script ID by Name

Fetch a script's ID by its name.

## Signature

```TypeScript
function getScriptIdByName(name: string): Promise<string | null>;
```

## Parameters

- `name`: The name of the script whose ID is being fetched.

## Returns

- The `string` ID of the found script or `null` if a script is not found.

## Examples

```TypeScript
const scriptId = await zeta.v1.query.getScriptIdByName("todo");
```
