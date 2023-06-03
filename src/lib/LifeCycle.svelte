<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

  // 挂载期
  onMount(() => {
    console.log(`挂载期`);
    // 一般可以通过挂载来进行网络请求
  });

  // dom节点更新前
  beforeUpdate(() => {
    console.log(`dom节点更新前`);
    // 用于记录dom节点的更新状态
  });

  // dom节点更新后
  afterUpdate(() => {
    console.log(`dom节点更新后`);
    // 用于记录dom节点的更新状态
  });

  // 卸载期
  onDestroy(() => {
    console.log(`卸载期`);
    // 一般可以用于清除定时器
  });
</script>