<script>
  // 睡眠函数
  async function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("时间到了");
      }, time);
    });
  }
  
</script>

{#await sleep(3000)}
  loading...
{:then res} 
  {res}
{/await}