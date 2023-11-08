# Paragraph

Create a paragraph element, i.e. a basic text container.

## Signature

```TypeScript
function paragraph(content: string | RichToken | RichText): Element;
```

## Parameters

- `content`: The content of the paragraph.

## Returns

- A paragraph element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.paragraph("I'm a paragraph.")
);
```
