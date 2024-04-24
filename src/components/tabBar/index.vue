<script setup lang="ts">
import { ref } from 'vue';
import router from '../../router';
// 用户姓名
let user = ref('yummy_x');
// 跳转方法
let jumpTo = function (pathName: String) {
  console.log(pathName);
  switch (pathName) {
    case '首页':
      router.push('/home');
      break;
    case '个人中心':
      router.push('/personal');
      break;
    default:
      break;
  }
}
</script>

<template>
  <div
    class="flex items-center justify-between bg-slate-200 z-50 fixed top-0 left-0 right-0 w-full p-4"
  >
    <div class="left flex items-center">
      <h1 class="font-bold text-3xl">Vistachronicle</h1>
      <span class="mx-6">|</span>
      <div class="user flex items-center">
        <el-icon class="mr-2"><Document /></el-icon>
        <h2 class="text-center">{{ user }} 的地图</h2>
      </div>
    </div>
    <div class="right">
      <el-button type="primary" class="mx-6 bg-slate-200 text-slate-800" plain @click="jumpTo('首页')">首页</el-button>
      <el-button type="success" class="mx-6 bg-slate-200 text-slate-800" plain @click="jumpTo('个人中心')">个人中心</el-button>
      <el-button type="warning" plain>分享</el-button>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-button){
  outline: none;
}
</style>
