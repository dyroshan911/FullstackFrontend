let puppeteer = require('puppeteer');
let browser

~(async () => {
    try {
        browser = await puppeteer.launch({headless: false});
        console.log('launched');
        //const page = await browser.newPage();
        //console.log('newpaged');
        //await page.goto('http://www.zhufengpeixun.cn/ahead/index.html');
        //await page.pdf({path: './example.pdf'});
        //await browser.close();
    } catch(error){
        console.error(error);
    }
})()

process.stdin.on('data', (data) => {
    console.log(data);
    go()
})

async function go() {
    const page = await browser.newPage();
    await page.goto('http://www.zhufengpeixun.cn/ahead/index.html');
}