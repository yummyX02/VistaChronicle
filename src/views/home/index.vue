<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// 导入组件
const tabBar = defineAsyncComponent( ()=> import('../../components/tabBar/index.vue') );
</script>

<template>
  <tabBar />
  <div class="container">

  </div>
</template>

<style scoped>
</style>
