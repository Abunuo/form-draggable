<template>
  <header>
    <el-button size="small" round @click="preview"><span>预 览</span></el-button>
		<el-button size="small" round @click="publish"><span>发 布</span></el-button>
  </header>
  <form-draggable class="content" v-model="formList"></form-draggable>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import FormDraggable from "@/components/form-draggable/index.vue";

export default defineComponent({
  name: "App",
  components: {
    FormDraggable
  },
  setup() {
    const state = reactive({
      formList: []
    });
    
    const preview = () => {
      console.log(state.formList);
    }
    
    const publish = () => {
      console.log(state.formList);
    }
    
    return {
      ...toRefs(state),
      preview,
      publish
    };
  }
});
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
header {
  padding: 0 30px;
  height: 60px;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #3296fa !important;
}
.content {
  flex: 1;
}
</style>
