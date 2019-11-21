process.env.debug = 'juejin:*';
let request = require('request-promise');
let cheerio = require('cheerio');
let debug = require('debug')('juejin:task:read');

exports.tagLsit = function (uri) {
    debug('开始获取文章分类');
    let options = {
        uri,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    return request(options).then($ => {
        // console.log($);
        let tags = [];
        $('.item').each((i, item) => {
            let tag = $(item);
            let title = tag.find('.title').first();
            let image = tag.find('.thumb').first();
            let subscribe = tag.find('.subscribe').first();
            let article = tag.find('.article').first();
            let url = tag.find('a').first();
            // console.log();
            tags.push({
                title: title.text().trim(),
                article: Number(article.text().match(/(\d+)/)[1]),
                subscribe: Number(subscribe.text().match(/(\d+)/)[1]),
                image: image.data('src').trim(),
                url: `https://juejin.im${url.attr('href').trim()}`
            })

        });
        console.log(tags);

        return $;
    })
}

exports.tagLsit('https://juejin.im/subscribe/all');