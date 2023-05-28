<script lang="ts">
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  // import Counter from './lib/Counter.svelte'
  import State from './lib/State.svelte'
  import Compute from './lib/Compute.svelte';
  import Bind from './lib/Bind.svelte';
  import Style from './lib/Style.svelte';
  import Parent from './lib/Parent.svelte';
  import CParent from './lib/CParent.svelte';
  import RenderHtml from './lib/RenderHtml.svelte';
  import Steper from './lib/Steper.svelte';
  import ChangeObj from './lib/ChangeObj.svelte';
  import If from './lib/If.svelte';
  import List from './lib/List.svelte';
  import Await from './lib/Await.svelte';
</script>

<main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
  <!-- 状态 -->
  <!-- <State /> -->
  <!-- 计算属性 -->
  <!-- <Compute /> -->
  <!-- 双向绑定数据 -->
  <!-- <Bind /> -->
  <!-- 样式 -->
  <!-- <Style />  这样无法渲染，待解决 -->
  <!-- <Style></Style>  -->
  <!-- <Parent /> -->
  <!-- <CParent /> -->
  <!-- <RenderHtml /> -->
  <!-- <Steper /> -->
  <!-- <ChangeObj /> -->
  <!-- <If /> -->
  <!-- <List /> -->
  <Await />
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
