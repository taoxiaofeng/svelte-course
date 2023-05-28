<script>
  let arr = [
    { id: 1, name: "张三", age: 25 },
    { id: 2, name: "张四", age: 57 },
    { id: 3, name: "张五", age: 65 },
    { id: 4, name: "张六", age: 14 },
    { id: 5, name: "张七", age: 53 },
    { id: 6, name: "张八", age: 96 },
    { id: 7, name: "张九", age: 26 },
    { id: 8, name: "张十", age: 31 },
    { id: 9, name: "十一", age: 72 },
    { id: 10, name: "十二", age: 65 },
    { id: 11, name: "十三", age: 97 },
    { id: 12, name: "十四", age: 66 },
  ];
</script>


<!-- for (let item of arr) { -->
  // 
<!-- } -->
{#each arr as item, index (item.id)}
  <div>
    {index + 1}、{item.name} - {item.age}
  </div>
{/each}