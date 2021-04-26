<template>
  <div class="home">
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from '@/common/components/tab/Tabbar.vue';

export default {
  components: {
    tabBar,
  },
};
</script>
