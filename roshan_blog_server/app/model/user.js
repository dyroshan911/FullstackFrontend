module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        username: {type: String},
        password: {type: String},
        email: {type: String}
    });
    
    return mongoose.model('User', userSchema);
}