# Create Script

Create a new script.

## Signature

```TypeScript
function createScript(props?: {
  emoji?: string;
  name?: string;
  code?: string;
}): string;
```

## Parameters

- `props`: Optional props to initialize the script.

## Returns

- The `string` ID of the newly created script.

## Examples

```TypeScript
const scriptId = zeta.v1.api.createScript();
```
