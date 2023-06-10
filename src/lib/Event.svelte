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

<style lang="scss" type="text/scss">

:global(body) {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
  /* body {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  } */
</style>
