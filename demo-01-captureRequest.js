'use strict';

// 调用 node 模块
const CDP = require("chrome-remote-interface");

CDP(client => {
  // 提取域名
  const { Network, Page } = client;
  // 设置处理函数
  Network.requestWillBeSent(params => {
    console.log(params.request.url);
  });
  Page.loadEventFired(() => {
    client.close();
  });
  // 开启事件 然后开始运行
  Promise.all([Network.enable(), Page.enable()])
    .then(() => {
      return Page.navigate({ url: "https://github.com" });
    })
    .catch(err => {
      console.error(err);
      client.close();
    });
}).on("error", err => {
  // 无法连接到远程端点
  console.error(err);
});