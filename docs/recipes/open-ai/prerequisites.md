# Prerequisites

To integrate Zetanote with OpenAI, you must first create an [OpenAI API key](https://platform.openai.com/docs/quickstart/account-setup).

## `_openAi`

Once you have the API key, create a private script called `_openAi`:

```TypeScript
async function ({ path, data, map }) {
  const { post } = zeta.v1.http;

  if (!path.startsWith("/")) {
    throw new Error(
      "The path must start with '/'."
    );
  }

  const apiKey = "<Your OpenAI API key>";
  const org = "<Your OpenAI organization>";

  const res = await post(
    `https://api.openai.com/v1${path}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "OpenAI-Organization": org,
      },
    }
  );

  return map(res);
}
```

Make sure to use your own API key and organization.

::: info
Because OpenAI API keys are long, it will probably wrap around to the next line. You can use the following trick to make it look nicer:
```TypeScript
const apiKey = [
  "<First half of your API key>",
  "<Second half of your API key>",
].join("");
```
:::

## `_chat`

To use the chat API, create another private script called `_chat`:

```TypeScript
function (args) {
  const { paragraph } = zeta.v1.element;

  const {
    systemMsgs = [],
    temperature,
    content,
    map,
  } = args;

  return {
    path: "/chat/completions",

    data: {
      // You can replace this
      // with another model.
      model: "gpt-3.5-turbo",

      temperature,

      messages: [
        ...systemMsgs.map(msg => ({
          role: "system",
          content: msg,
        })),

        {
          role: "user",
          content,
        },
      ],
    },

    map: map ? map : (res) => {
      return res
        .data
        .choices[0]
        .message
        .content
        .trim();
    },
  };
}
```

## `_serialize`

Next, create a private script for serializing rich text into plain text called `_serialize`:

```TypeScript
function (elements) {
  return elements
    .map(({ text }) => text)
    .join("\n");
}
```

## `_deserialize`

Finally, create a private script for deserializing Markdown text (the OpenAI API response format) into rich text called `_deserialize`:

```TypeScript
function (text) {
  const {
    codeBlock,
    paragraph,
    bullet,
  } = zeta.v1.element;

  const lines = text.split("\n");
  const ret = [];

  let currentCodeBlock = [];
  let isCodeBlock = false;
  let codeLang = "Text";

  lines.forEach((line) => {
    if (isCodeBlock) {
      if (line.startsWith("```")) {
        ret.push(codeBlock({
          code: currentCodeBlock.join("\n"),
          lang: codeLang,
        }));

        isCodeBlock = false;
      } else {
        currentCodeBlock.push(line);
      }
    } else {
      if (line.startsWith("```")) {
        codeLang = line.slice(3) || "Text";
        currentCodeBlock = [];
        isCodeBlock = true;
      } else if (line.startsWith("- ")) {
        ret.push(bullet(line.slice(2)));
      } else {
        ret.push(paragraph(line));
      }
    }
  });

  return ret;
}
```

## Next steps

Now that you have all the prerequisite scripts, you can implement the OpenAI recipes in the following sections.
