<script setup>
  import {useRoute} from "vue-router";
  const route = useRoute();

</script>
<template>
  <div>
    <h1>{{route.path}}</h1>
  </div>
</template>

<style lang='scss' scoped>

</style>