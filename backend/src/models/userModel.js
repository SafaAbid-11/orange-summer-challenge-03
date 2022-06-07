const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: String,
    isAdmin: Boolean,
    });

    UserSchema.plugin(uniqueValidator);
module.exports=mongoose.model('User',UserSchema);