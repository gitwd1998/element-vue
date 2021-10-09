<template>
  <div class="box">
    <draggable
      v-model="letfList"
      class="left"
      v-bind="{
        animation: 200,
        group: 'description',
        disabled: false,
        forceFallback: true,
        fallbackClass: 'fallback',
        ghostClass: 'ghost',
      }"
    >
      <div v-for="menu in letfList" :key="menu.index" @click="handleClick">
        {{ menu.title }}
      </div>
    </draggable>
    <draggable
      v-model="rightList"
      class="right"
      v-bind="{
        animation: 200,
        group: 'description',
        disabled: false,
        forceFallback: true,
        fallbackClass: 'fallback',
        ghostClass: 'ghost',
      }"
    >
      <div v-for="menu in rightList" :key="menu.index" @click="handleClick">
        {{ menu.title }}
      </div>
    </draggable>
  </div>
</template>
<script>
import nav from "@/assets/json/navList.json";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      letfList: nav[0].item,
      rightList: nav[1].item,
    };
  },
  methods: {
    handleClick(e) {
      console.log(e.target.getBoundingClientRect());
    },
  },
};
</script>
<style lang="less" scoped>
.left,
.right {
  padding: 20px;
  width: 50%;
  border: 1px solid teal;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  > div {
    border: 1px solid tomato;
    font: 20px/24px "";
    padding: 5px 10px;
    margin: 2px;
    cursor: move;
  }
  .ghost {
    opacity: 0.2;
  }
  .fallback {
    box-shadow: tomato 0 0 10px;
  }
}
</style>