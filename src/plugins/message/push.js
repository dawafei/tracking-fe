/**
 * 消息发送模块
 * 根据情况使用下面的其中一种方式发送数据
 * 1.新建Image对象，向远程发送get参数
 * 2.新建XMLHTTPREQUEST对象，设定header和参数，发送GET/POST参数
 */

 /**
  * 将data对象转化成字符串
  * @param {*} data 
  */
function transform(data) {

    return "";
}

export default function (api, data) {
    const img = new Image();
    const url = "http://img.bxiaob.top" + api + "?" + transform(data);
    img.src = url;
}