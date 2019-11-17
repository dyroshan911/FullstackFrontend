module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const categorySchma = new Schema({
        name: {type: String}
    });
    return mongoose.model('Category', categorySchma);  
}