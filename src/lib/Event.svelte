<script>
  const mouseenter = () => {
    console.log("鼠标移入了");
  };

  const mouseleave = () => {
    console.log("鼠标移出了");
  };
</script>

<svelte:body on:mouseenter={mouseenter} on:mouseleave={mouseleave} />
<h1>鼠标移入移出</h1>
