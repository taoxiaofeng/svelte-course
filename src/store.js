
  import { writable, readable, derived } from 'svelte/store';
  
  // 全局状态的声明
  export const count = writable(99);

  // 只读状态的声明，只允许内部修改
  export const time = readable(new Date(), function start(set) {
    // 内部自更新定时器，每秒更新一次
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    // 返回一个函数，用于清除定时器
    return function stop() {
      clearInterval(interval);
    }
  });

  // 利用 derived 基于原有的仓库数据进行定义新变量
  const start = new Date();
  export const elapsed = derived(time, $time => Math.round(($time - start) / 1000));

