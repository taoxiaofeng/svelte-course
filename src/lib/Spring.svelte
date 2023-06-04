<script>
  import { spring } from "svelte/motion";

  // spring 是具有弹性的动画，可以用来模拟物理运动
  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );

  let size = spring(10);
</script>

<div style="position: absolute; right: 1rem;">
  <label>
    <h3>stiffness ({coords.stiffness})</h3>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      bind:value={coords.stiffness}
    />
  </label>

  <label>
    <h3>damping ({coords.damping})</h3>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      bind:value={coords.damping}
    />
  </label>
</div>

<svg
  on:mousemove={({ clientX, clientY }) => {
    coords.set({ x: clientX, y: clientY });
    size.set(20);
  }}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
>
  <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
  circle {
    fill: #ff3e00;
  }
</style>
