

~ function() {

    //给一个连字符串例如：get-element-by-id转化成驼峰形式。
    function toCamelStr() {
        return this.replace(/-\w/g, (content) => content.slice(1).toUpperCase())
    }
    // 匹配二进制数字
    function testBinStr() {
        return this.match(/^[01]+$/) !== null;
    }

    //3 匹配十进制数字 (有至少一位数字, 但是不能以0开头)
    function testNumber() {
        return this.match(/^(\d|[1-9]\d+)$/) !== null;
    }

    //匹配ip地址
    function testIp() {
        //return this.match(/^((\d|\d{2}|[01]\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|\d{2}|[01]\d{2}|2[0-4]\d|25[0-5])$/) !== null;
        return this.match(/(([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}([01]?\d\d?|2[0-4]\d|25[0-5])$/) !== null;
    }
    
    //8 . 匹配用尖括号括起来的以a开头的字符串 "<a herf='www.baidu.com'>";
    function getAElementConent() {
        const res = this.match(/<a([^>]+)>/);
        return res !== null ? res[1] : null;
    }

    //分割数字每三个以一个逗号划分
    /**
     * // 前瞻：
        exp1(?=exp2) 查找exp2前面的exp1
        // 后顾：
        (?<=exp2)exp1 查找exp2后面的exp1
        // 负前瞻：
        exp1(?!exp2) 查找后面不是exp2的exp1
        // 负后顾：
        (?<!exp2)exp1 查找前面不是exp2的exp1
        ?=
        '?<='
        '?!'
        ''
     */
    function getBigNumberStr() {
        return this.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
    }


    ['toCamelStr', 'testBinStr', 'testNumber', 'testIp', 'getAElementConent', 'getBigNumberStr'].forEach((item) => {
        String.prototype[item] = eval(item);
    })
} ();

/*function toCamelStr( str ) {
    str.replace(/-\w/, (content) => content.slice(1).toUpperCase())
}*/

// console.log('get-element-by-id'.toCamelStr());
// console.log('100101111011002'.testBinStr());
// console.log('1'.testNumber());
// console.log('192.168.02.1'.testIp());
// console.log("<a herf='www.baidu.com'>".getAElementConent());
// var f = '99999999999'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
// console.log(f);
console.log('1231232212366'.getBigNumberStr());






