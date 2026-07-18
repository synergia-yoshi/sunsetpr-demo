# SunsetPR public repair demo

This repository is an intentionally vulnerable fixture for the [SunsetPR AI Model Lifecycle Check](https://github.com/synergia-yoshi/sunsetpr-action) and repair GitHub App.

The `main` branch contains five deprecated or retired OpenAI, Anthropic, and Gemini model references across TypeScript, Python, YAML, and `.env.example`. One environment-backed Gemini call also remains explicitly unresolved at runtime.

Two real GitHub workflows are visible:

1. The free Action scans `main`, adds line annotations and official evidence, and makes no code change.
2. The installed SunsetPR App created [draft repair PR #2](https://github.com/synergia-yoshi/sunsetpr-e2e/pull/2), changed five model references, added generated migration invariants, and left the environment-backed value for runtime confirmation.

The draft repair PR's customer-side CI runs type checking, lint, existing tests, and the generated compatibility test. SunsetPR does not merge the PR.

This fixture is a controlled demonstration, not a claim that every repository or migration can be repaired automatically.
