# Get Starter Pack

Get the starter pack.

## Signature

```TypeScript
function getStarterPack(): {
  nextStep: Element[];
  nodes: {
    type: "Note" | "Script";
    id: string;
  }[];
};
```

## Parameters

- None.

## Returns

- An object containing the next step elements as well as the starter pack nodes.

## Examples

```TypeScript
const { nextStep, nodes } = beta.getStarterPack();
```
