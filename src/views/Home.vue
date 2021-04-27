<template>
  <div class="home">
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from '@/common/components/tab/TabBar.vue';

export default {
  components: {
    tabBar,
  },
};
</script>
