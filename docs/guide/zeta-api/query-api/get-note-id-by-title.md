# Get Note ID by Title

Fetch a note's ID by its title.

::: warning
If there are multiple notes with the same title, it returns the ID of the first note found.
:::

## Signature

```TypeScript
function getNoteIdByTitle(title: string): Promise<string | null>;
```

## Parameters

- `title`: The title of the note whose ID is being fetched.

## Returns

- The `string` ID of the found note or `null` if a note is not found.

## Examples

```TypeScript
const noteId = await zeta.v1.query.getNoteIdByTitle("Todo 2023-11-05");
```
