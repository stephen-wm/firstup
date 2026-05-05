import stylistic from '@stylistic/eslint-plugin';
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import configPrettier from "eslint-config-prettier";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import importPlugin from "eslint-plugin-import";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import pluginPromise from "eslint-plugin-promise";
import regexpPlugin from "eslint-plugin-regexp";
import pluginSecurity from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect'
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,

	sonarjs.configs.recommended,
	pluginSecurity.configs.recommended,
	pluginPromise.configs["flat/recommended"],
	regexpPlugin.configs.recommended,
	perfectionist.configs["recommended-natural"],
	unicorn.configs.recommended,
	reactYouMightNotNeedAnEffect.configs.recommended,
	eslintPluginBetterTailwindcss.configs.recommended,

	configPrettier,

	{
		rules: {
			// --- Perfectionist ---
			"perfectionist/sort-imports": "off",
			"perfectionist/sort-named-imports": "off",
			"perfectionist/sort-objects": "off"
		}
	},

	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'@stylistic': stylistic,
			import: importPlugin,
			"no-secrets": noSecrets
		},
		rules: {
			// --- TypeScript ---
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ fixStyle: "inline-type-imports", prefer: "type-imports" },
			],
			"@typescript-eslint/no-empty-object-type": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/no-unnecessary-condition": "warn",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],


			// --- Tailwind ---
			"better-tailwindcss/enforce-consistent-class-order": "warn",
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
			"better-tailwindcss/no-unknown-classname": "off",

			// --- Imports ---
			"import/no-duplicates": "error",

			// --- No Secrets ---
			"no-secrets/no-secrets": "error",

			// --- SonarJS ---
			"sonarjs/cognitive-complexity": ["warn", 20],
			"sonarjs/no-duplicate-string": "off",
			"sonarjs/no-small-switch": "off",
			"sonarjs/prefer-immediate-return": "off",
			"unicorn/filename-case": "off",

			// --- Unicorn ---
			"unicorn/no-null": "off",
			"unicorn/prefer-module": "off",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/prefer-global-this": "off",

			// --- React ---
			"react/display-name": "off",
			"react/jsx-curly-brace-presence": [
				"error",
				{ children: "never", props: "never" },
			],
  		"react/self-closing-comp": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			"jsx-a11y/alt-text": "error",

			// --- General ---
			"arrow-spacing": ["error", { after: true, before: true }],
			eqeqeq: ["error", "always"],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-debugger": "error",
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
			"no-trailing-spaces": "error",
			"no-unused-vars": "off",
			"no-var": "error",
			"brace-style": ["error", "stroustrup", { allowSingleLine: true }],
		},
		settings: {
			"better-tailwindcss": {
				callees: ["cn", "clsx", "twMerge"],
				entryPoint: "src/styles/globals.css",
			},
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.json",
				},
			},
		},
	},

	// allow console logging in edge logger
	{
		files: ["src/lib/edge-logger.ts", "src/scripts/**/*.ts"],
		rules: { "no-console": "off"}
	},

	// Override default ignores of eslint-config-next.
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		"src/lib/db/migrations/**",
		"src/components/ui/**",
		"node_modules/**",
		"public/**",
		"plopfile.mjs",
		"src/components/motion-primitives"
	]),
]);

export default eslintConfig;
