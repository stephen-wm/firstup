'use client';

import { useSyncExternalStore } from 'react';

// Simple subscribe function that never updates (mount status is constant after hydration)
const cleanup = () => {};
const subscribe = () => cleanup; // No cleanup needed - never unsubscribes

// Server snapshot (during SSR)
const getServerSnapshot = () => false;

// Client snapshot (after hydration)
const getClientSnapshot = () => true;

/**
 * A hook that returns true only on the client after hydration.
 * Uses useSyncExternalStore for optimal performance.
 */
export function useIsMounted() {
	return useSyncExternalStore(
		subscribe,
		getClientSnapshot, // Client value
		getServerSnapshot, // Server value
	);
}
