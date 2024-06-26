# Todo

Create a todo element. Todo elements have a checkbox in front of them.

## Signature

```TypeScript
function todo(
  content: string | RichToken | RichText,
  props?: {
    indent?: number;
    done?: boolean;
  }
): Element;
```

## Parameters

- `content`: The content of the todo.
- `props`: Optional props to initialize the todo.

## Returns

- A todo element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.todo("I'm a todo.")
);
```
