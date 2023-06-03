<script>
  import { tick } from 'svelte';

  let count = 0;

  async function handleClick() {
    count++;
   
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 1000);
    }).then((res) => {
      console.log(res);
    });


    await tick();  // 类似于vue中的nextTick
    console.log('count', count);
  }
</script>

count: {count}
<button on:click={handleClick}>click</button>
