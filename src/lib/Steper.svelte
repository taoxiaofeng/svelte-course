<script>
  let count = 0;

  const add = () => {
    count++;
  };

  const reduce = () => {
    count--;
  };

  // 实现类似于 vue 的 watch
  // $ 后面跟表达式
  $: {
    console.log(count);
  }
</script>

<button on:click={add}>+</button>
{count}
<button on:click={reduce}>-</button>
