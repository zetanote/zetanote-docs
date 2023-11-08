# GET

Send an HTTP GET request.

## Signature

```TypeScript
function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<any>;
```

## Parameters

- `url`: The request URL.
- `config`: The request config. Refer to the [Axios docs](https://github.com/axios/axios/tree/f7adacdbaa569281253c8cfc623ad3f4dc909c60#request-config) for details.

## Returns

- The response data.

## Examples

```TypeScript
const data = await zeta.v1.http.get(
  "https://api.dictionaryapi.dev/api/v2/entries/en/equanimity"
);
```
