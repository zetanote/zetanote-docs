# Next Task

This recipe involves two components - the `Task` tag and the `nextTask` script. Once set up, calling `nextTask` allows you to immediately jump to the next highest-priority task.

## `Task` tag

First, create a `Task` tag by adding it to any note. Then, open the tag by clicking on it and add the following fields:

- `Priority`
  - Type: `Select`
  - Options: `Low`, `Medium`, `High`
- `Due date`
  - Type: `Date`
- `Done`
  - Type: `Boolean`

## `nextTask` script

Then, create a public script called `nextTask`:

```TypeScript
async function () {
  const { getNodesByTag } = zeta.v1.query;
  const { paragraph } = zeta.v1.element;
  const { _ } = zeta.v1.common;

  const {
    setOutput,
    openNote,
  } = zeta.v1.ui;

  const PRIORITY_MAP = {
    "Low": 2,
    "Medium": 1,
    "High": 0,
  };

  const nodes = getNodesByTag("Task");
  const tasks = [];

  // Fetch all unfinished tasks.
  for await (const node of nodes) {
    if (
      node.type === "Note" &&
      !node.tags["Task"]["Done"]
    ) {
      tasks.push(node);
    }
  }

  const [
    tasksWithDate,
    tasksWithoutDate,
  ] = _.partition(
    tasks,
    (task) => task.tags["Task"]["Due date"]
  );

  const getDueTime = (task) =>
    task.tags["Task"]["Due date"].getTime();

  // Helper for mapping priority to a number.
  const getPriority = (task) => {
    const priority =
      task.tags["Task"]["Priority"] || "Low";

    if (!PRIORITY_MAP.hasOwnProperty(priority)) {
      throw new Error(
        `Unrecognized priority: '${priority}'.`
      );
    }

    return PRIORITY_MAP[priority];
  };

  let nextTask = null;

  // Prioritize tasks with a due date.
  if (tasksWithDate.length > 0) {
    // First, prioritize tasks by due date.
    const minDueTime = getDueTime(_.minBy(
      tasksWithDate,
      getDueTime
    ));

    const filteredTasks = tasksWithDate.filter(
      (task) => getDueTime(task) === minDueTime
    );

    // Second, prioritize tasks by priority.
    nextTask = _.minBy(
      filteredTasks,
      getPriority
    );
  } else if (tasksWithoutDate.length > 0) {
    // If all remaining tasks are missing a due
    // date, simply prioritize them by priority.
    nextTask = _.minBy(
      tasksWithoutDate,
      getPriority
    );
  }

  if (!nextTask) {
    setOutput(paragraph("You're all done! 🎉"));

    return;
  }

  openNote(nextTask.id);
}
```

Running `nextTask()` in a code cell will open the next highest-priority task, allowing you to seamlessly move between tasks as you complete them.
