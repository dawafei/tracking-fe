import Log from "../interface/log"
/**
 * 使用console的方式输出
 * 继承自日志接口
 */
export default class Console extends Log {
    constructor(name = "") {
        super();
        this.name = name;
    }
    log(...args) {
        console.log("%c" + this.name + "调试输出", "color: #00aa00", ...args);
    }
    info(...args) {
        console.info("%c" + this.name + "调试输出", "color: #00aa00", ...args);
    }
    warm(...args) {
        console.warn("%c" + this.name + "调试输出", "color: #ff9900", ...args);
    }
    error(...args) {
        console.error("%c" + this.name + "调试输出", "color: #bb0000", ...args);
    }
    out(...args) {
        console.log("%c" + this.name + "调试输出", "color: #333", ...args);
    }
}