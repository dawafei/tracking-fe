/**
 * 1.构建一个全局对象
 * 2.加载各种全局库：环境处理，本地身份，本地输出（web到console，node到console或者文件）
 * 3.加载配置参数设定的日志保存、发送库
 * 4.加载各种拦截库:拦截dom修改，拦截错误发生，拦截事件触发，拦截页面跳转
 * 5.构建上层对象：
 */
import Console from "./plugins/console";
import Message from "./plugins/message/index"
import Error from "./plugins/error"

const Logs = new Console();

/**
 * 默认配置
 */
const defaults = {
    dom: true, //绑定dom增删
    err: true, //绑定全局的报错
}

const version = "1.0.0";

export default class Tranck {
    constructor(cfgs) {
        this.version = version;
        let opts = Object.assign({}, defaults, cfgs);
        Logs.log("收到参数", opts);
        this.check(opts);
        this.handle(opts);
    }
    /**
     * 检查环境，设置全家对象
     */
    check() {
        //判断，web、node等
        this.Message = Message;
        Logs.log("绑定日志上报模块");
    }
    /**
     * 根据配置拦截不同的对象
     * @param {*} opts 
     */
    handle(opts) {
        if (opts.err) Error();
    }
}