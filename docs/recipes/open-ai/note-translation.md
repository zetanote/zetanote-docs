# Note Translation

Once you have created the [prerequisite scripts](/recipes/open-ai/prerequisites), you can use ChatGPT to translate a note. To do so, create a script called `translate`:

```TypeScript
async function (lang = "Korean") {
  const { getNote } = zeta.v1.context;
  const { createNote } = zeta.v1.api;
  const { openNote } = zeta.v1.ui;

  const {
    title,
    content,
  } = getNote();

  const systemMsgs = [
    `Translate the following into ${lang}.`,
  ];

  const [
    newTitle,
    newContent,
  ] = await _openAi(_chat({
    systemMsgs,

    content: [
      title,
      _serialize(content),
    ].join("\n\n"),

    map: (res) => {
      const text = res
        .choices[0]
        .message
        .content
        .trim();

      const splitText = text.split("\n\n");
      const newTitle = splitText[0];
      const rest = splitText.slice(1);

      return [
        newTitle,
        _deserialize(rest.join("\n\n")),
      ];
    },
  }));

  const noteId = createNote({
    title: newTitle,
    content: newContent,
  });

  openNote(noteId);
}
```

You can call this script using a code cell (e.g. `translate("Japanese")`) or using a shortcut cell. Also note that you can change the default language from Korean to another language.
