# Context API

The Context API allows you to get the _execution context_ of the currently running script. Remember that scripts can be executed in [various ways](/guide/scripts/running-scripts) - with the Context API, you can decide how a script behaves under different circumstances.

::: warning
DB writes submitted by the Main API will not be reflected in the Context API results until all scripts have finished executing. For example, if you update a note and then load it from the context as part of the same execution, it will return the old state of the note.
:::
