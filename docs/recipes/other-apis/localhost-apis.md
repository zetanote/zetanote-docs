# Localhost APIs

Zetanote can also access localhost APIs. You just have to make sure to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for `https://zetanote.com`.

## Example

For instance, you can create an Express server as follows:

```TypeScript
import express, { json } from "express";
import cors from "cors";

const PORT = 8080;

const app = express();

app.use(
  cors({
    // Allow requests from Zetanote.
    origin: "https://zetanote.com",
  })
);

app.use(json());

app.post("/api/hello", (req, res) => {
  res.send({ message: `Hello ${req.body.name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
```

Then, you can create a public script called `hello`:

```TypeScript
async function (name = "Zetanote") {
  const { paragraph } = zeta.v1.element;
  const { setOutput } = zeta.v1.ui;
  const { post } = zeta.v1.http;

  const { data } = await post(
    "http://localhost:8080/api/hello",
    { name }
  );

  setOutput(paragraph(data.message));
}
```

Once the server is up, running `hello("World")` in a code cell should output "Hello World!" The full Express server example can be found [here](https://github.com/zetanote/zetanote-localhost).

## Use cases

You can integrate Zetanote with localhost APIs for all kinds of use cases:

- Use a localhost server as a request proxy for external APIs that disallow CORS.
- Hit a machine learning service running on localhost (e.g. for NLP).
- Import Markdown files into Zetanote from your computer.
