# Vue Monorepo with Shared Library

This is a Vue 3 monorepo using PNPM Workspaces and Vite. It includes:

- Three independent applications: @pkg/a, @pkg/b, @pkg/c
- One shared library: @shared/d
- Each app runs standalone, builds separately, and imports the shared library
- The shared library is only loaded once across all apps

## ✨ Features

- ⚡ Vue 3 + Vite + TypeScript
- 🧹 ESLint + Prettier
- 🛡 Husky + Lint-staged
- 🧪 Vitest + Coverage
- 🌐 Axios + Vue I18n (en-US, pt-BR ready)
- 🎨 Dracula dark theme
- 📦 Monorepo with PNPM Workspaces
- 💡 Vite aliases for @shared/d
- 📁 Centralized tsconfig paths

## 📦 Installation

```bash
pnpm install
pnpm run prepare
```

## 🚀 Run Applications Individually

```bash
pnpm dev
```

Each application has its own dev server.

## 🔨 Build

```bash
pnpm build
```

## 🧪 Test & Coverage

```bash
pnpm test
pnpm coverage
```

## 🧹 Lint & Format

```bash
pnpm lint
pnpm format
```

## 📁 Folder Structure

```
packages/
├── pkg/
│   ├── a/
│   ├── b/
│   └── c/
└── shared/
    └── d/
```

- pkg/\* = applications
- shared/d = shared Vue component library

## 📌 Notes

- @shared/d is imported by all apps using a Vite alias
- It is only loaded once in memory
- Ideal setup for scaling, micro-frontends, or module federation

## 📝 License

MIT © Denis Vieira
