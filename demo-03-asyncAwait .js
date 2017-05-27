const CDP = require('chrome-remote-interface');

CDP(async (client) => {
    // extract domains
    const { Network, Page } = client;
    // setup handlers
    Network.requestWillBeSent((params) => {

        console.log(222, params.request.url);
    });
    // enable events then start!
    try {
        await Promise.all([Network.enable(), Page.enable()]);
        await Page.navigate({ url: 'https://haha.sogou.com' });
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    }
    await client.close();
}).on('error', (err) => {
    // cannot connect to the remote endpoint
    console.error(err);
});