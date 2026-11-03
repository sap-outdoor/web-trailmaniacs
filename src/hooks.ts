import type { Reroute, Transport } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute: Reroute = ({ url }) => deLocalizeUrl(url).pathname;

// SvelteKit's generated client reads this export even without custom serializers.
export const transport: Transport = {};
