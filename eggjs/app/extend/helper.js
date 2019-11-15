let moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    relative(time) {
        return moment(time).fromNow();
    }
}