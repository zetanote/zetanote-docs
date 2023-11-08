# Bullet

Create a bullet element. Bullet elements have a bullet in front of them.

## Signature

```TypeScript
function bullet(content: string | RichToken | RichText): Element;
```

## Parameters

- `content`: The content of the bullet.

## Returns

- A bullet element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.bullet("I'm a bullet.")
);
```
