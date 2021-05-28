<template>
  <div class="message">
    <Header title="消息" hasMsg rightText="创建群聊"></Header>
    <div class="msg-wrap">
      <div class="msg-nav">
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="@/assets/images/icon/fs.png" alt="" />
          </div>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="@/assets/images/icon/xh.png" alt="" />
          </div>
          <p>赞</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="@/assets/images/icon/wd.png" alt="" />
          </div>
          <p>@我的</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="@/assets/images/icon/pl.png" alt="" />
          </div>
          <p>评论</p>
        </div>
      </div>
      <div class="msg-ad">
        <img src="../../assets/images/icon/me_ad.png" alt="" />
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <div class="msg-list-item">
            <div class="avathor">
              <img src="../../assets/images/mine/tx.png" alt="" />
            </div>
            <div class="user-info">
              <div class="info-top">前端小新</div>
              <div class="info-bottom">
                <span class="user-msg">哈哈哈哈哈哈哈哈哈哈哈哈</span>
                <span class="send-time">14:39</span>
              </div>
            </div>
            <div class="right">
              <span class="iconfont icon-xiangji"></span>
            </div>
          </div>
          <div class="msg-list-item">
            <div class="avathor">
              <img src="../../assets/images/dy.png" alt="" />
            </div>
            <div class="user-info">
              <div class="info-top">
                抖音小助手
                <span class="gf">官方</span>
              </div>
              <div class="info-bottom">
                <span class="user-msg">#我的头号惊喜</span>
                <span class="send-time">11:01</span>
              </div>
            </div>
            <div class="right">
              <span class="no-read"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/components/index/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.message {
  .msg-wrap {
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid #474950;
    .msg-nav {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      .msg-nav-item {
        text-align: center;
        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-bottom: 5px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 18px;
          }
        }
        p {
          font-size: 15px;
        }
      }
    }
    .msg-ad {
      display: block;
      height: 90px;
      width: 100%;
      padding: 20px 0;
      border-top: 1px solid #33343d;
      border-bottom: 1px solid #33343d;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .msg-list-box {
      padding-top: 30px;
      .msg-list-item {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #252323;
        .avathor {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: 1px solid rgb(134, 134, 134);
          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        .user-info {
          flex: 1;
          height: 60px;
          .info-top {
            font-size: 14px;
            margin-left: 10px;
            display: flex;
            line-height: 30px;
            width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .gf {
              background: rgb(51, 51, 51);
              color: rgb(168, 168, 168);
              padding: 2px;
              height: 14px;
              font-size: 12px;
              line-height: 14px;
              margin-left: 2px;
            }
          }
          .info-bottom {
            font-size: 13px;
            margin-left: 10px;
            display: flex;
            line-height: 30px;
            color: rgb(138, 138, 138);
            .user-msg {
              margin-right: 10px;
              height: 20px;
              max-width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .right {
          width: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .icon-xiangji {
            font-size: 24px;
          }
          .no-read {
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #face15;
          }
        }
      }
    }
  }
}
</style>
