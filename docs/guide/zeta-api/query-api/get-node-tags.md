# Get Node Tags

Fetch the tags on a node.

## Signature

```TypeScript
function getNodeTags(node: {
  type: "Note" | "Script";
  id: string;
}): Promise<{
  [label: string]: {
    [fieldName: string]: any;
  };
}>;
```

## Parameters

- `node`: The node whose tags are being fetched.

## Returns

- An object whose keys are the labels of the tags on the node and whose values are the field values record (refer to the section below).

## Example return

If a node has the following tags:

- Work:
  - Project: `Select`

- Task:
  - Priority: `Integer`
  - Done: `Boolean`

Then the return value might look like:

```TypeScript
{
  Work: {
    Project: ["Next.js Migration"],
  },
  Task: {
    Priority: 0,
    Done: true,
  },
}
```

## Examples

```TypeScript
const node = {
  type: "Note",
  id: "123e4567-e89b-12d3-a456-426614174000",
};

const tags = await zeta.v1.query.getNodeTags(node);
```
