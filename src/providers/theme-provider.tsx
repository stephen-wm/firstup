'use client';

import {
	ThemeProvider as NextThemeProvider,
	type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes';

// These props are locked as app-wide constants and intentionally
// excluded from the public API of this wrapper
type ThemeProviderProps = Omit<
	NextThemesProviderProps,
	| 'attribute'
	| 'defaultTheme'
	| 'disableTransitionOnChange'
	| 'enableColorScheme'
	| 'enableSystem'
>;

// Wrapper around next-themes ThemeProvider
export function ThemeProvider({
	children,
	...props
}: Readonly<ThemeProviderProps>) {
	return (
		<NextThemeProvider
			{...props}
			attribute="class"
			defaultTheme="dark"
			disableTransitionOnChange
			enableColorScheme
			enableSystem
			storageKey="firstup-web-theme"
			themes={['light', 'dark']}
			{...props}
		>
			{children}
		</NextThemeProvider>
	);
}
