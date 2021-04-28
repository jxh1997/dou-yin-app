<template>
  <div class="item" @click="itemClick">
    <router-link
      :to="navPath"
      tag="span"
      :class="isActive ? 'active' : ''"
    >
      {{ tabTitle }}
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
    props: {
        tabTitle: {
            type: String,
            default: '',
        },
        navPath: {
            type: String,
            default: '/index',
        },
    },
    computed: {
        isActive() {
            return this.$route.path.split('/')[1] === this.navPath.split('/')[1];
        },
    },
    methods: {
        itemClick() {
            console.log(this.$route.path.split('/')[1]);
        },
    },
};
</script>

<style lang="less" scoped>
.item {
  flex: 1;
  text-align: center;
  font-weight: 500;
}
.active {
  color: #ffff;
  font-weight: 600;
}
</style>
