## Commits

- Use prefixes such as `Feat`, `Bug`, `Chore` (comments, refactor, etc.), `Merge`, etc. for commit messages. Also use present-tense, imperative-style, e.g. `Feat: Add Setup Files`
  > Describe your changes in imperative mood, e.g. "make abc do xyz" instead of "[This patch] makes abc do xyz" or "[I] changed abc to do xyz", as if you are giving orders to the codebase to change its behavior.

## Branch Naming

- The branch name should contain the issue number and the topic, seperated by a hyphen, e.g. `23-refactor-components`

## PRs

- Every PR should be liked with an issue on the repository (i.e. A ticket on the project). You can do this using `#(IssueNumber)`

## Pages & Components

- Page specific components should be created under the page's route while a website-wide component should be created in the `components/` directory.
- If the component isn't large and/or isn't unique enough, you can add it to the bottom of the parent's file.
