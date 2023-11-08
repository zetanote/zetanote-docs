# Update Settings

Update the user's settings.

## Signature

```TypeScript
function updateSettings(update: {
  theme?: Theme;
  shortcutScriptIds?: string[];
}): void;
```

## Parameters

- `update`: The update object.

## Returns

- Void.

## Examples

```TypeScript
zeta.v1.api.updateSettings({
  theme: "Cyberpunk",
});
```
