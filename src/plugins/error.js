/**
 * 全局报错拦截
 */
import Console from "./console";

const Logs = new Console("Error");

export default function () {
    Logs.log("拦截全局错误方法");
    window.onerror = function (msg, file) {
        Logs.error(msg, file);
    }
}