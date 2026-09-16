# Sing His Praise

This project is an Expo-based React Native app for mobile and web experiences.

## Development workflow

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the local development server

   ```bash
   npm start
   ```

3. Launch platform targets

   ```bash
   npm run android
   npm run ios
   npm run web
   ```

## Quality and testing workflow

Run the project checks before merge or release:

```bash
npm run lint
npm run typecheck
npm test
```

For a single CI-style validation command:

```bash
npm run ci
```

## Refactoring strategy

Keep the app maintainable by following these rules:

- Extract reusable UI into components under the app/components folder.
- Keep screen logic small and focused on one responsibility.
- Move repeated styles and constants into shared files.
- Prefer small, testable functions over large inline logic blocks.
- Run lint, type-checks, and tests with every refactor.

## Production readiness checklist

Before shipping to production:

- Unit and integration tests pass.
- TypeScript checks pass without errors.
- Linting passes.
- Environment variables and app config are reviewed.
- Android/iOS release builds are tested on real devices or simulators.
- App icons, splash screen, and version metadata are verified.

## Recommended release flow

1. Build and validate locally.
2. Run automated tests.
3. Refactor and clean up technical debt.
4. Test release builds on device.
5. Publish to app stores or deploy the web build.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [React Native documentation](https://reactnative.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction)
