# Bionic Reading

Some people find that bionic reading helps them read faster (particularly those with ADHD or dyslexia). Bionic reading essentially bolds the first half of each word in a text, allowing your eyes to skim more easily.

You can implement bionic reading in Zetanote by creating a public script called `bionic`:

```TypeScript
function () {
  const { paragraph } = zeta.v1.element;
  const { getNote } = zeta.v1.context;
  const { createNote } = zeta.v1.api;
  const { openNote } = zeta.v1.ui;

  const {
    title,
    content,
  } = getNote();

  const newContent = content.map((element) => {
    const richTokens = [];

    element.text
      .split(/\b/)
      .forEach((token) => {
        if (/^\w/.test(token)) {
          const half = Math.ceil(
            token.length / 2
          );

          richTokens.push({
            text: token.slice(0, half),
            bold: true,
          });

          if (half < token.length) {
            richTokens.push({
              text: token.slice(half),
            });
          }
        } else {
          richTokens.push({ text: token });
        }
      });

    return paragraph(richTokens);
  });

  const noteId = createNote({
    title: `[Bionic Reading] ${title}`,
    content: newContent,
  });

  openNote(noteId);
}
```

For example, if you had the following note:

::: info Emergence
Emergence is a concept that describes the phenomenon of complex systems arising from the interactions and collective behavior of simpler components. It suggests that the whole is more than the sum of its parts, as the system exhibits new properties and behaviors that cannot be predicted by analyzing its individual components alone.
:::

Running `bionic()` in a code cell inside that note will create and open the following note:

::: info [Bionic Reading] Emergence
**Emerg**ence **i**s **a** **conc**ept **th**at **descr**ibes **th**e **pheno**menon **o**f **comp**lex **syst**ems **aris**ing **fr**om **th**e **intera**ctions **an**d **colle**ctive **beha**vior **o**f **simp**ler **compo**nents. **I**t **sugg**ests **th**at **th**e **who**le **i**s **mo**re **th**an **th**e **su**m **o**f **it**s **par**ts, **a**s **th**e **sys**tem **exhi**bits **ne**w **prope**rties **an**d **behav**iors **th**at **can**not **b**e **predi**cted **b**y **analy**zing **it**s **indiv**idual **compo**nents **alo**ne.
:::
