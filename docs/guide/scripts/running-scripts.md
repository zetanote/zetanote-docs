# Running Scripts

## Using a code cell

Once we have created and populated a script, we can invoke it using a _code cell_. A code cell can be spawned within a note by typing <kbd>></kbd> followed by <kbd>Space</kbd> at the beginning of an empty line. That will present a terminal-like interface that can be used to execute _any script_ by their name.

To use the script created in the [last section](/guide/scripts/writing-scripts), spawn a code cell and type `todo()` into it, then press <kbd>Shift</kbd> + <kbd>Enter</kbd> to run the code cell. When we first run it, it should create and open a new todo list for today. On subsequent runs, it will open up the same todo list until the next day.

::: tip
If you're familiar with slash commands, you can think of a code cell as a more powerful version of a slash command.
:::

## Using a shortcut cell

Similar to a code cell, a _shortcut cell_ can be spawned within a note. This can be achieved by simply typing <kbd>Space</kbd> at the beginning of an empty line. That should bring up a grid of shortcut buttons. When clicked, each button will execute the corresponding script.

You can add or remove shortcuts through the script menu dropdown. You can also add, remove, or rearrange shortcuts through settings.

::: tip
You cannot pass any arguments into a shortcut script. Hence, scripts that don't have any required parameters that are frequently used are ideal candidates for shortcuts.
:::

## Using a button

You can insert a button element that points to a script. Once it's inserted into a note, you can click the button to invoke the target script. Below is an example of how to insert a button into a note:

```TypeScript
const button = zeta.v1.element.button({
  scriptId: "123e4567-e89b-12d3-a456-426614174000",
  label: "Todo",
});

zeta.v1.api.insert(button);
```

## Sharing scripts

You can share your scripts with the Zetanote community or use scripts that are written by other users. If you come up with a useful workflow automation, consider sharing it so that others can benefit from it as well!

::: danger
If you're going to use a script written by someone else, make sure you fully understand what the script does. Do not use scripts from authors you don't trust.
:::
