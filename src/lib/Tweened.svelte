<script>
  import { tweened, spring } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // const progress = tweened(0, {
  //   duration: 2000,
  //   easing: cubicOut
  // });

  // spring 是具有弹性的
  const progress = spring(0, {
    stiffness: 0.1,
    damping: 0.25
  });
</script>

<progress value={$progress}
></progress>
<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(1)}>100%</button>

<style>
  progress {
    width: 100%;
    height: 20px;
    display: flex;

  } 
</style>