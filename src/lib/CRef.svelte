<script>
	import { onMount } from 'svelte';

	let canvasElement;

	onMount(() => {
		const ctx = canvasElement.getContext('2d');
		console.log(`ctx -- `, ctx)
	});
</script>

<canvas bind:this={canvasElement}></canvas>