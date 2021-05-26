// 实例化组件
import Vue from 'vue';
import toast from './toast.vue';

// 创建一个toast构造器
const Toast = Vue.extend(toast);

// 实例对象
let instance;

// 时间，设置一个定时器 用于关闭toast提示框
let timer = null;

// 设置参数
const toastMsg = (options) => {
    // 判断是否实例化
    if (!instance) {
        // 创建一个实例
        instance = new Toast();
        // 挂载到页面
        document.body.append(instance.$mount().$el);
    }
    // 设置默认时间
    instance.duration = 1500;
    // 设置提示内容
    if (typeof options === 'string') {
        instance.message = options;
    } else if (typeof options === 'object') {
        instance.type = options.type;
        instance.message = options.message;
        instance.duration = options.duration || 1500;
    } else {
        return;
    }

    // 展示 toast
    instance.show = true;
    timer = setTimeout(() => {
        instance.show = false;
        // 清空定时器
        clearTimeout(timer);
        timer = null;
    }, instance.duration);
};

export default toastMsg;
