module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    const articleSchema = new Schema({
        title: { type: String, require:true }, //标题
        content: { type: String, require:true },//正文
        user: { type: ObjectId, ref: 'User', require:true },//作者
        pv: { type: Number, default: 0 },//页面的访问量
        comments: [ //评论
            {
                user: { type: ObjectId, ref: 'User' }, //评论者
                content: { type: String },//评论内容
                createAt: { type: Date, default: Date.now }
            }
        ],
        createAt: { type: Date, default: Date.now } //文章创建时间,默认为当前时间
    })
    return mongoose.model('Article', articleSchema);
}