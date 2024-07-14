# Free Public APIs

Zetanote can be integrated with any external API, including a slew of free public APIs. Here are some examples:

- [Public APIs](https://github.com/public-apis/public-apis)
- [API Ninjas](https://api-ninjas.com/)

## Example

To get a random inspirational quote, create a script called `quote`:

```TypeScript
async function () {
  const { quote } = zeta.v1.element;
  const { setOutput } = zeta.v1.ui;
  const { get } = zeta.v1.http;

  const { data } = await get([
    "https://api.quotable.io/quotes/random",
    "?tags=inspirational",
  ].join(""));

  const {
    author,
    content,
  } = data[0];

  setOutput(quote(`"${content}" - ${author}`));
}
```

Running `quote()` in a code cell should output an inspirational quote.
