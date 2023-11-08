# Get Container

Get the container in which the script is being executed. For instance, the script may be executed inside a note through a code cell.

## Signature

```TypeScript
function getContainer(): { 
  type: "Note";
  id: string;
} | null;
```

## Parameters

- None.

## Returns

- An object referring to the container in which the script is being executed. If the script is not being executed from within a container, the returned value is `null`.

## Examples

```TypeScript
const container = zeta.v1.context.getContainer();
```
