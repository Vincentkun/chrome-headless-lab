'use strict';

// 调用 node 模块
const CDP = require("chrome-remote-interface");

CDP(chrome => {
  chrome.Page
    .enable()
    .then(() => {
      return chrome.Page.navigate({ url: "https://github.com" });
    })
    .then(() => {
      chrome.DOM.getDocument((error, params) => {
        if (error) {
          console.error(params);
          return;
        }
        const options = {
          nodeId: params.root.nodeId,
          selector: "img"
        };
        chrome.DOM.querySelectorAll(options, (error, params) => {
          if (error) {
            console.error(params);
            return;
          }
          params.nodeIds.forEach(nodeId => {
            const options = {
              nodeId: nodeId
            };
            chrome.DOM.getAttributes(options, (error, params) => {
              if (error) {
                console.error(params);
                return;
              }
              console.log(params.attributes);
            });
          });
        });
      });
    });
}).on("error", err => {
  console.error(err);
});