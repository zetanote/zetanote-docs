# Append

Insert elements to the bottom of the current note.

## Signature

```TypeScript
function append(elements: Element | Element[]): void;
```

## Parameters

- `elements`: One or more elements to append. Refer to the [Element API](/guide/zeta-api/element-api/overview).

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.api.append(
  zeta.v1.element.todo("Book flight to Japan.")
);
```
