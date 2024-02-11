import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/jobs');
	const data = await response.json();
	return {
        jobs: data
    };
}) satisfies LayoutServerLoad;
