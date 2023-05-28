<script>
  let count = 0;

  const add = () => {
    count++;
  };

  const reduce = () => {
    count--;
  };

  let price = 20;

  // 实现类似于 vue 的 watch
  // $ 后面跟表达式
  $: {
    console.log(count);
  }
  // computed
  $:total = (count * price).toFixed(2);
</script>

<button on:click={add}>+</button>
{count}
<button on:click={reduce}>-</button>

<br />
价格：{price}
<p>总价：{total}</p>
