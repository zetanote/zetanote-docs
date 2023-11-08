# Search Note

This recipe allows you to search for text in a large note and output the aggregated results. Note that this is different from the browser's search functionality as it allows you to view all matches in one place.

All you need to do is create a public script called `searchNote`:

```TypeScript
function (query) {
  const { paragraph } = zeta.v1.element;
  const { getNote } = zeta.v1.context;
  const { setOutput } = zeta.v1.ui;

  const MAX_OUTPUT_LENGTH = 32;

  const { content } = getNote();

  if (
    !query || typeof query !== "string"
  ) {
    throw new Error(
      "Query must be a nonempty string."
    );
  }

  const lcQuery = query.toLowerCase();

  const output = content.filter((element) => {
    if (element.type === "Button") {
      return false;
    }

    // Case-insensitive match on query.
    return element.text
      .toLowerCase()
      .includes(lcQuery);
  }).slice(0, MAX_OUTPUT_LENGTH);

  if (!output.length) {
    setOutput(paragraph("No matches."));

    return;
  }

  setOutput(output);
}
```

For example, you can run `searchNote("feedback loop")` in a code cell to output elements containing the text "feedback loop".
