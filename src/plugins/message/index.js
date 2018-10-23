/**
 * 消息模块
 */
import push from "./push"

export default {
    /**
     * 将数据发送到info接口
     * @param {*} data 
     */
    info(data) {
        push("/info", data);
    },
    warn(data) {
        push("/warn", data);
    },
    error(data) {
        push("/error", data);
    },
    msg(data) {
        push("/msg", data);
    }
}