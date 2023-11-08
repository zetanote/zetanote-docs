# Quote

Create a quote element.

## Signature

```TypeScript
function quote(content: string | RichToken | RichText): Element;
```

## Parameters

- `content`: The content of the quote.

## Returns

- A quote element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.quote("I'm a quote.")
);
```
