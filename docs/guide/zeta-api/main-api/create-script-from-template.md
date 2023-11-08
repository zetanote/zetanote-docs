# Create Script from Template

Create a script using a template script. If the template script contains tokens in the form of `{token}`, they will be interpolated based on the `props` object that is passed in. For instance, if the `props` object has a key `"date"` mapping to the value `"2023-11-05"`, then the token `{date}` in the template script will be replaced with `2023-11-05` in the newly created script.

If the `props` argument is omitted, this method simply clones the template script.

## Signature

```TypeScript
function createScriptFromTemplate(
  id: string,
  props: {
    [key: string]: string;
  } = {}
): string;
```

## Parameters

- `id`: The ID of the template script.
- `props`: Mappings used to interpolate values into placeholder tokens.

## Returns

- The `string` ID of the newly created script.

## Examples

```TypeScript
const srcScriptId = "123e4567-e89b-12d3-a456-426614174000";

const scriptId = zeta.v1.api.createScriptFromTemplate(srcScriptId, {
  date: "2023-11-05",
});
```
