# Tag

Add a tag to the current note.

## Signature

```TypeScript
function tag(
  label: string,
  props?: {
    [fieldName: string]: any;
  }
): void;
```

## Parameters

- `label`: The label of the tag being added to the note.
- `props`: Optional props to initialize the tag. Refer to [`updateNodeTag`](/guide/zeta-api/main-api/update-node-tag).

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.api.tag("Task");
```
