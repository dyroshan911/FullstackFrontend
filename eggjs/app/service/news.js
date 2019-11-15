let { Service } = require('egg');

class NewsService extends Service {
    async fetch() {
        let { data } = await this.ctx.curl(this.config.newsUrl);
        let news = [];
        data = data.toString();
        data.replace(/<a href="([^"]+)".+>([^<]+)<\/a>/g, (...[,url, title]) => {
            news.push({
                title,
                url,
                time: this.ctx.helper.relative(new Date())
            });
        });
        return news;
    }
}

module.exports = NewsService;