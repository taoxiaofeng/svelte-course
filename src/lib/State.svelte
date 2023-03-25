<script lang='ts'>
  let name = '张三';
</script>


<div>
  <input bind:value={name} />
  <p>你好，{name}</p>
</div>

<style>
  div {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style> 