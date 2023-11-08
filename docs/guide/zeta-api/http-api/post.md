# POST

Send an HTTP POST request.

## Signature

```TypeScript
function post(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<any>;
```

## Parameters

- `url`: The request URL.
- `data`: The request data.
- `config`: The request config. Refer to the [Axios docs](https://github.com/axios/axios/tree/f7adacdbaa569281253c8cfc623ad3f4dc909c60#request-config) for details.

## Returns

- The response data.

## Examples

```TypeScript
const data = await zeta.v1.http.post(
  `https://api.openai.com/v1/chat/completions`,
  {
    model: "gpt-3.5-turbo",

    messages: [{
      role: "user",
      content: "How can I take smarter notes?",
    }],
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "OpenAI-Organization": organization,
    },
  }
);
```
