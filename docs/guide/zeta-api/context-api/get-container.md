# Get Container

Get the container in which the script is being executed. For instance, the script may be executed inside a note through a code cell.

## Signature

```TypeScript
function getContainer(): { 
  type: "Note";
  id: string;
  index: number;
} | null;
```

## Parameters

- None.

## Returns

- An object referring to the container in which the script is being executed. This object also includes an `index` field that represents the position of the executable block (e.g. code cell) in the container. If the script is not being executed from within a container, the returned value is `null`.

## Examples

```TypeScript
const container = zeta.v1.context.getContainer();
```
