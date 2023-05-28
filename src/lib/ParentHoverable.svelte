<script>
  import Hoverable from "./Hoverable.svelte";
</script>

<!-- 传递变量到作用域插槽中 -->
<Hoverable let:hovering={active}>
  {active}<div class:active={active}>鼠标悬浮时显示的内容</div>
</Hoverable>


<style>
	div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>
