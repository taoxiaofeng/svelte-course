<script>
  let hovering;

  $: {
    console.log(hovering);
  }
</script>

<div on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false}>
  <slot hovering={hovering}></slot>
</div>