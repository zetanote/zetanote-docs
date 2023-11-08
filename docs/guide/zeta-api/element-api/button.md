# Button

Create a button element. A button can be clicked to conveniently execute a script without having to type it out in a code cell.

## Signature

```TypeScript
function button(props: {
  scriptId: string;
  label: string;
}): Element;
```

## Parameters

- `scriptId`: The ID of the script to be called by the button.
- `label`: The button label.

## Returns

- A button element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.button({
    scriptId: "123e4567-e89b-12d3-a456-426614174000",
    label: "Create todo list",
  })
);
```
