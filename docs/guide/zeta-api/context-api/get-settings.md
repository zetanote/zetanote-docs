# Get Settings

Get the user's current settings.

## Signature

```TypeScript
function getSettings(): {
  theme: Theme;
  shortcutScriptIds: string[];
} | null;
```

## Parameters

- None.

## Returns

- The user's current settings.

## Examples

```TypeScript
const settings = zeta.v1.context.getSettings();
```
