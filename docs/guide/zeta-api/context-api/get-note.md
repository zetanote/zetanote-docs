# Get Note

Get the note in which the script is being executed.

## Signature

```TypeScript
function getNote(): {
  id: string;
  emoji: string | null;
  title: string;
  content: Element[];
  updatedAt: number;
} | null;
```

## Parameters

- None.

## Returns

- The note in which the script is being executed.

## Examples

```TypeScript
const note = zeta.v1.context.getNote();
```
