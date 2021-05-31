<template>
  <div class="sign">
    <div class="sign-header">
      <span
        class="iconfont icon-fanhui"
        style="font-size: 30px"
        @click="goBack"
      ></span>
      <span style="color: #686868"> 帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>请输入验证码</h2>
        <p>验证码已通过短信发送至+86{{ tel }}</p>
      </div>
    </div>
    <div class="sign-box">
      <div class="inp">
        <input
          v-model="code"
          @input="changeCode"
          type="number"
          class="inp-controll"
          placeholder="请输入验证码"
        />
      </div>
      <div class="time">
        {{ time }}
      </div>
    </div>
    <div class="not-dx">
      <p>收不到短信？<a>获取语言验证码</a></p>
    </div>
    <div class="code-btn">
      <button :class="btnBg ? 'active' : ''" @click="Login">
        <div v-if="!loading">
          {{ msg }}
        </div>
        <div v-else class="loading">
          <van-loading color="#1989fa" size="16px" />
          {{ msg }}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            // 电话号码
            tel: '',
            // 验证码
            code: '',
            // state中提供的验证码
            verifyCode: '',
            // 短信发送倒计时
            time: 60,
            disabled: false,
            btnBg: false,
            loading: false,
            msg: '登录',
        };
    },
    created() {
        this.getCode();
        this.tel = this.$route.query.tel;
        console.log(this.tel);
    },
    methods: {
        ...mapActions('sign', ['sign']),
        // 监听输入验证码
        changeCode(e) {
            this.code = e.target.value;
            console.log(this.code, this.verifyCode);
            if (this.code === this.verifyCode) {
                this.disabled = true;
                this.btnBg = true;
            } else {
                this.disabled = false;
            }
        },
        // 获取验证码
        getCode() {
            this.$toast('验证码发送成功');
            this.verifyCode = this.$store.state.sign.verifyCode;
            this.countDown();
        },
        // 倒计时
        countDown() {
            if (this.time > 0) {
                this.time -= 1;
                setTimeout(this.countDown, 1000);
            } else {
                this.time = '重新发送';
            }
        },
        // 登录按钮点击事件
        Login() {
          if (!this.disabled) {
            this.$toast({
              message: '请输入正确的验证码',
              type: 'error',
              duration: 2000,
            });
          } else {
            this.loading = true;
            this.msg = '登录中';
            setTimeout(() => {
                this.loading = false;
                this.msg = '登录成功';
            }, 1500);
            setTimeout(() => {
                // 登录跳转操作
                this.sign({ code: this.code });
            }, 2000);
          }
        },
        // 返回
        goBack() {
            this.$router.go(-1);
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
    padding: 20px 10px;
    h2 {
      margin: 0;
      font-size: 22px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #adadad;
    }
  }
  .sign-box {
    display: flex;
    height: 50px;
    margin: 0;
    align-items: center;
    background-color: #f9f9f9;
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
    .time {
      text-align: right;
      width: 80px;
      font-size: 16px;
      line-height: 80px;
      margin-right: 10px;
    }
  }
  .not-dx {
    margin-top: 10px;
    p {
      color: #b9b9b9;
      font-size: 14px;
      a {
        color: #3d79b4;
      }
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
}
</style>
