# Common Libraries

The Zeta API provides access to some of the most useful JavaScript libraries. They can be accessed at `zeta.v1.common`.

## Lodash

[Lodash](https://github.com/lodash/lodash) (`4.17.21`) is available at `zeta.v1.common._`.

```TypeScript
function () {
  const { getContainer } = zeta.v1.context;
  const { updateNote } = zeta.v1.api;
  const { _ } = zeta.v1.common;

  updateNote(getContainer().id, {
    emoji: _.sample(["🌱", "🌿", "🌲"]),
  });
}
```

## Immer

[Immer](https://github.com/immerjs/immer) (`9.0.1`) is available at `zeta.v1.common.produce`.

```TypeScript
function (props) {
  const { produce } = zeta.v1.common;

  return produce(props, (draft) => {
    draft.deeply.nested.field = "Immer is great.";
  });
}
```

## Zod

[Zod](https://github.com/colinhacks/zod) (`3.21.4`) is available at `zeta.v1.common.z`.

```TypeScript
function (rating) {
  const { updateTag } = zeta.v1.api;
  const { z } = zeta.v1.common;

  z.number()
    .int()
    .min(0)
    .max(10)
    .parse(rating);

  updateTag("Movie", {
    "Rating": rating,
  });
}
```
