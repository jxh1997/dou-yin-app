<template>
  <div>
    <Header
      :title="'修改' + title"
      hasLeft
      hasSave
      rightText = "保存"
      :isChange = "isChange"
      @saveInfo = "saveInfo"
    ></Header>
    <div class="update">
      <!-- 修改名称 -->
      <div v-if="type === 'name'">
        <p class="title">我的{{ title }}</p>
        <input
          type="text"
          name=""
          id=""
          v-model="content"
          v-on:input="changeInput"
        />
        <span class="iconfont icon-guanbi1" @click="clear"></span>
        <span class="length">{{ content.length }}/{{ maxLenght }}</span>
      </div>

      <!-- 修改抖音号 -->
      <div v-if="type === 'dyh'">
        <p class="title">我的{{ title }}</p>
        <input
          type="text"
          name=""
          id=""
          v-model="content"
          v-on:input="changeInput"
        />
        <span class="iconfont icon-guanbi1" @click="clear"></span>
        <span class="desc">{{ desc }}</span>
      </div>

      <!-- 修改简介 -->
      <div v-if="type === 'desc'">
        <p class="title">个人{{ title }}</p>
        <textarea
          v-model="content"
          :placeholder="desc"
          v-on:input="changeInput"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/components/index/Header.vue';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
      content: '',
      maxLenght: 20,
      isChange: false,
      desc: '',
    };
  },
  components: {
    Header,
  },
  created() {
    this.title = this.$route.params.title;
    this.content = this.$route.params.content;
    this.desc = this.$route.params.desc;
    this.type = this.$route.params.type;
  },
  methods: {
    ...mapActions('user', ['UpdateUserInfo']),
    changeInput() {
      if (this.content !== this.$route.params.content) {
        this.isChange = true;
      } else {
        this.isChange = false;
      }
    },
    clear() {
      this.content = '';
    },
    saveInfo() {
      const that1 = this;
      this.UpdateUserInfo({
        key: this.type,
        value: this.content,
        that: that1,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.update {
  background-color: #101821;
  height: calc(100vh - 48px);
  color: #fff;
  border-top: 1px solid rgb(199, 199, 199);
  padding: 20px;
  .title {
    color: #a7a7a7;
    font-size: 16px;
    margin-top: 0px;
  }
  input {
    color: #fff;
    background-color: #101821;
    border: none;
    height: 46px;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #a7a7a7;
    position: relative;
    margin-bottom: 20px;
  }
  .icon-guanbi1 {
    color: #a7a7a7;
    font-size: 20px;
    position: absolute;
    right: 15px;
    margin-top: -55px;
  }
  .length {
    color: #a7a7a7;
    font-size: 14px;
  }
  .desc {
    color: #a7a7a7;
    font-size: 14px;
    line-height: 20px;
    text-align: justify;
  }
  textarea {
    width: 100%;
    height: 200px;
    background-color: #3b3b3b;
    border: none;
    padding: 15px 10px;
    box-sizing: border-box;
    font-size: 14px;
  }
}
</style>
