# Element API

The Element API allows you to create rich text elements that can be inserted into a note.

## Element properties

Every method in this API returns an object of type `Element`, which has the following properties.

### `Element.type`

The element's `type` is a `string` and can take on the following values:

- `Bullet`
- `Button`
- `CodeBlock`
- `CodeCell`
- `Heading`
- `Image`
- `Paragraph`
- `Quote`
- `ShortcutCell`
- `Todo`

### `Element.data`

Depending on the element's `type`, its `data` is either an object with a certain shape or `undefined`:

- `Bullet.data`
  - `indent`: `number` - the indent level of the bullet.
- `Button.data`
  - `scriptId`: `string` - the ID of the script invoked by the button.
- `CodeBlock.data`
  - `lang`: `string` - the language of the code block.
- `CodeCell.data`
  - `undefined`
- `Heading.data`
  - `level`: `number` - the heading level.
- `Image.data`
  - `undefined`
- `Paragraph.data`
  - `undefined`
- `Quote.data`
  - `undefined`
- `ShortcutCell.data`
  - `undefined`
- `Todo.data`
  - `indent`: `number` - the indent level of the todo.
  - `done`: `boolean` - whether the todo is checked.

### `Element.text`

The plain text of the element's content in the form of a `string`.

### `Element.richText`

The rich text of the element, which has the following shape:

```TypeScript
type RichToken = {
  text: string;
  link?: string;
  kbd?: true;
  bold?: true;
  code?: true;
  italic?: true;
  highlight?: true;
  underline?: true;
  strikethrough?: true;
};

type RichText = RichToken[];
```

Rich text is an array of objects, each representing a snippet of text that's contained within the element. The `text` property is the plain text of the snippet, and the other optional properties contain information about how the snippet is formatted. For example, if an element contains the following text:

> The _quick brown fox_ jumps over the **lazy dog**.

Its `richText` would be:

```TypeScript
[
  {
    text: "The ",
  },
  {
    text: "quick brown fox",
    italic: true,
  },
  {
    text: " jumps over the ",
  },
  {
    text: "lazy dog",
    bold: true,
  },
  {
    text: ".",
  },
];
```

Note that:

```TypeScript
element.richText.map(({ text }) => text).join("") === element.text; // true
```
