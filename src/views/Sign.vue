<template>
  <div class="sign">
    <div class="sign-header">
      <span class="iconfont icon-guanbi" style="font-size: 30px" @click="$router.back()"></span>
      <span style="color: #686868"> 帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>登录后即可展示自己</h2>
        <p>已阅读并同意<a>用户协议</a>和<a>隐私政策</a></p>
      </div>
    </div>
    <div class="sign-box">
      <div class="sele">
        <select class="sele-controll" v-model="telErea">
          <option value="+86">+86</option>
        </select>
      </div>
      <em />
      <div class="inp">
        <input
          v-model="tel"
          @input="changeTel"
          type="tel"
          class="inp-controll"
          placeholder="请输入手机号码"
        />
      </div>
    </div>
    <div class="not-sign">
      <p>未注册的手机号验证通过后将自动注册</p>
    </div>
    <div class="code-btn">
      <button
        :disabled="disabled"
        :class="btnBg ? 'active' : ''"
        @click="getCode"
      >
        <div v-if="!loading">
          获取短信验证码
        </div>
        <div v-else class="loading">
          <van-loading color="#1989fa" size="16px"/>
          发送中
        </div>
      </button>
    </div>
    <div class="other">
      <router-link href="" tag="a" to="pwSign">密码登录</router-link>
      <a @click="show">其他方式登录</a>
    </div>
    <transition name="up">
      <div class="mask" v-if="showMask" @click="close">
        <div class="oauth">
          <ul>
            <li class="oauth-item">
              <img src="@/assets/images/icon/tt.png" alt="" />
              <span>今日头条登录</span>
            </li>
            <li class="oauth-item">
              <img src="@/assets/images/icon/QQ.png" alt="" />
              <span>QQ登录</span>
            </li>
            <li class="oauth-item">
              <img src="@/assets/images/icon/wx.png" alt="" />
              <span>微信登录</span>
            </li>
            <li class="oauth-item">
              <img src="@/assets/images/icon/wb.png" alt="" />
              <span>微博登录</span>
            </li>
            <li class="quxiao" @click="close">取消</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);

export default {
    data() {
        return {
            // 号码所属地
            telErea: '+86',
            // 手机号 v-modal input输入框 双向数据绑定
            tel: '',
            // 是否显示其它登录方式
            showMask: false,
            // 用于‘获取短信验证码’按钮动态样式处理
            btnBg: false,
            // 获取短信验证码按钮是否可用
            disabled: true,
            loading: false,
        };
    },
    methods: {
        show() {
            this.showMask = true;
        },
        close() {
            this.showMask = false;
        },
        changeTel(e) {
            this.tel = e.target.value;
            console.log(this.tel);
            const regTel = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (regTel.test(this.tel)) {
                console.log('符合正则表达式');
                this.btnBg = true;
                this.disabled = false;
            } else {
                console.log('不符合正则表达式');
                this.btnBg = false;
                this.disabled = true;
            }
        },
        getCode() {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ name: 'codeSign', query: { tel: this.tel } });
          }, 1500);
        },
    },
};
</script>

<style lang="less" scoped>
.sign {
  padding: 30px;
  background: #fff;
  height: 100vh;
  .sign-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
  .sign-content {
    padding: 40px 10px;
    h2 {
      margin: 0;
      font-size: 22px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #686868;
    }
    p a {
      color: #3d79b4;
      text-decoration: none;
      font-weight: 600;
      padding: 0 5px;
    }
  }
  .sign-box {
    display: flex;
    height: 50px;
    margin: 20px 0 0 0;
    align-items: center;
    background-color: #f9f9f9;
    .sele-controll {
      height: 36px;
      font-weight: bold;
      margin-left: 5px;
      font-size: 16px;
      border: none;
      background-color: #f9f9f9;
      width: 60px;
      outline: none;
    }
    .inp {
      height: 36px;
      width: 90%;
      margin-left: 10px;
      .inp-controll {
        caret-color: #fe2c55;
        height: 36px;
        background-color: #f9f9f9;
        width: 90%;
        font-size: 16px;
        border: none;
        outline: none;
      }
    }
    em {
      border-left: 1px solid #ddd;
      height: 12px;
      margin-left: 10px;
      line-height: 15px;
      box-shadow: 1px 1px 1px #eeeeee;
    }
  }
  .not-sign {
    margin-top: 10px;
    p {
      color: #b9b9b9;
      font-size: 14px;
    }
  }
  .code-btn {
    button {
      margin: 10px 0;
      width: 100%;
      padding: 15px 0;
      border: none;
      letter-spacing: 1px;
      font-size: 17px;
      color: #fff;
      font-weight: 600;
      background: #dbdbdb;
      border-radius: 2px;
      .loading {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .active {
      color: #ffffff;
      background-color: #fe2c55;
    }
  }
  .other {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 10px;
    a {
      color: #3d79b4;
      text-decoration: none;
      font-weight: 600;
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    .oauth {
      height: 46%;
      width: 100%;
      position: absolute;
      bottom: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: #fff;
      text-align: center;
      font-size: 16px;
      ul {
        width: 100%;
        text-align: center;
        padding-left: 0;
        margin-top: 0;
        .oauth-item {
          width: 100%;
          list-style: none;
          border-bottom: 1px solid #ebebeb;
          line-height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
        }
        .quxiao {
          border-top: 5px solid #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 70px;
        }
      }
    }
  }
}
.up-enter-active,
.up-leave-active {
  transition: all 0.3s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(100%);
}
</style>
