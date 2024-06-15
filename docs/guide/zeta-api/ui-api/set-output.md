# Set Output

Output elements inside an executable block (e.g. code cell).

## Signature

```TypeScript
function setOutput(elements: Element | Element[]): void;
```

## Parameters

- `elements`: One or more elements to output. Refer to the [Element API](/guide/zeta-api/element-api/overview).

## Returns

- Void.

## Examples

```TypeScript
const { content } = zeta.v1.context.getNote();

const output = content.filter(
  (element) => element.text.includes("Zetanote")
);

zeta.v1.ui.setOutput(output);
```
