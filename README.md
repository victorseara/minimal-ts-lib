# Minimal Typescript library

This project is a minimal Typescript library template with some opinionated configurations. It includes the following configurations:

- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects;
- [Vitest](https://vitest.dev/): A test runner designed for Vite;
- [Biome](https://github.com/biomejs/biome): A tool for managing TypeScript projects;
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript;
- [pnpm](https://pnpm.io/): A fast, disk space-efficient package manager;
- [changesets](https://github.com/changesets/changesets): A tool to manage versioning and changelogs with a focus on multi-package repositories;
- GitHub Actions: ci and publish workflows configured;

## Using the template

To use this template, you need to make the following adjustments:

### Update package.json

- Replace `<library_name>` with your library name (e.g: `@my-org/my-lib`);
Replace `<repo_url>` with your repo URL (e.g: `https://github.com/my-org/my-lib.git`);
- Replace `<author_email>` with your email;
- Replace `<homepage_url>` with your homepage or README file;
- Replace `<author_name>` with your name;

### Configure GitHub actions

- Configure the following secrets in your repository: `GITHUB_TOKEN` and `NPM_TOKEN` - see instructions here: [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) / [npm](https://docs.npmjs.com/creating-and-viewing-access-tokens)
