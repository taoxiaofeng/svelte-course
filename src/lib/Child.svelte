<div class="box2">
  <!-- 匿名插槽 -->
  <slot />
  <!-- 具名插槽 -->
  <slot name="slot1">slot1</slot>
  <slot name="slot2">slot2</slot>
</div>

<style lang="scss" type="text/scss">
  .box2 {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
</style>
