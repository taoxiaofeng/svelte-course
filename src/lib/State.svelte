<script lang='ts'>
  let name = '张三';
  let src = './vite.svg';

</script>


<div>
  <input bind:value={name} />
  <!-- <p>你好，{name}</p> -->
  <p>你好，{name.replace(/(.)(.)/, "$1_$2")}</p>
  <img {src} alt="vite">
</div>

<style>
  div {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style> 