import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const esModules = [
  "oidc-provider",
  "quick-lru",
  "node:crypto",
  "nanoid",
  "got",
  "@sindresorhus/is",
  "p-cancelable",
  "@szmarczak/http-timer",
  "cacheable-request",
  "normalize-url",
  "responselike",
  "lowercase-keys",
  "mimic-response",
  "form-data-encoder",
  "cacheable-lookup",
];
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "node",
  transformIgnorePatterns: [`/node_modules/(?!(${esModules.join("|")})/)`],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  const base = await createJestConfig(config)();
  return {
    ...base,
    // @ts-ignore
    transformIgnorePatterns: base.transformIgnorePatterns.filter(
      (ptn) => ptn !== "/node_modules/"
    ), // ['^.+\\.module\\.(css|sass|scss)$', '/node_modules/(?!(package1|package2)/']
  };
};
