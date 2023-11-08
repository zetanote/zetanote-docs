# Query API

The Query API allows you to fetch data from the Zetanote DB.

::: info
Every method in the Query API returns a promise.
:::

::: warning
DB writes submitted by the Main API will not be reflected in the Query API results until all scripts have finished executing. For example, if you update a note and then query it as part of the same execution, it will return the old state of the note.
:::
