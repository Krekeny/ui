# Semantic Commit Messages

These are the krekeny semantic commit messages. Their purpose is to make commit messages more readable to others in a more structed way.
Our system is based on the Conventional Commits 1.0.0.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional but is higly recommended

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: feat, fix, docs, style, refactor, test, chore or data.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, layout changes, etc)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
- `data`: (changing data of any kind)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html