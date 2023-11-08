# Heading

Create a heading element.

## Signature

```TypeScript
function h1(content: string | RichToken | RichText): Element;
function h2(content: string | RichToken | RichText): Element;
function h3(content: string | RichToken | RichText): Element;
```

## Parameters

- `content`: The content of the heading.

## Returns

- A heading element.

## Examples

```TypeScript
const { h1, h2, h3 } = zeta.v1.element;

zeta.v1.api.insert([
  h1("Heading 1"),
  h2("Heading 2"),
  h3("Heading 3"),
]);
```
