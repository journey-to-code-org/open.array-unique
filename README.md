# open.array-unique

Dependency-free array deduplication by value, property name, or key selector.

## Install

```bash
npm install @journey-to-code/open-array-unique
```

## Usage

```js
uniqueArray([1,1,2]); // [1,2]
uniqueArray(users, "id");
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
