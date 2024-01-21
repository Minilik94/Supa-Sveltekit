<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import { page, navigating } from '$app/stores';
	import { goto } from '$app/navigation';
	export let data: LayoutData;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
		integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer" />
</svelte:head>

{#if $page.url.pathname === '/'}
	<button class="btn btn-ghost" on:click={() => goto('/create-job')}>Create Job</button>
{/if}

{#if $page.url.pathname !== '/'}
	<button class="" on:click={() => goto('/')}>
		<i class="fa fa-arrow-left fa-fw ml-1" aria-hidden="true"> </i></button>
{/if}
<slot />
