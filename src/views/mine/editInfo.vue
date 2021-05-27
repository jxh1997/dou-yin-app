<template>
  <div class="edit">
    <Header title="编辑资料" hasLeft></Header>
    <div class="edit-wrap">
      <div class="avatar-box">
        <div class="avatar">
          <img :src="userInfo.avathor" />
          <span class="iconfont icon-xiangji"></span>
          <input type="file" />
          <p>点击更换头像</p>
        </div>
      </div>
      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名称</span>
          <span>
            {{ userInfo.name }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>
            {{ userInfo.dyh }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">简介</span>
          <span class="desc">
            点击设置
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">性别</span>
          <span>
            {{ userInfo.sex }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>
            {{ userInfo.birthday }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">所在地</span>
          <span>
            {{ userInfo.region }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>
            {{ userInfo.school === "" ? "点击设置" : userInfo.school }}
            <span class="iconfont icon-right"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/components/index/Header.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Header,
    },
    // 计算属性，监控userInfo
    computed: {
        ...mapState({
            userInfo: (state) => state.user.userInfo,
        }),
    },
};
</script>

<style lang="less" scoped>
.edit {
  background-color: #101821;
  color: #fff;
  min-height: 100vh;
  .edit-wrap {
    padding: 0 15px;
    box-sizing: border-box;
    .avatar-box {
      color: #ffffff;
      text-align: center;
      padding: 20px;
      .avatar {
        position: relative;
        .iconfont {
          position: absolute;
          font-size: 30px;
          left: 50%;
          top: calc(50% - 20px);
          transform: translate(-50%, -50%);
        }
        img {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          opacity: 0.5;
        }
        input {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
  .edit-box {
    border-top: 1px solid #292831;
    color: #919191;
    .edit-item {
      display: flex;
      justify-content: space-between;
      line-height: 60px;
      font-size: 16px;
      .label {
        color: #ffffff;
      }
      .icon-right {
        font-size: 20px;
      }
    }
  }
}
</style>
