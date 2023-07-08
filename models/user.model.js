const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName:{type: String, required: true, unique: true, trim: true},
        userPassword:{type: String, required: true},
        userEmail:{type: String, required: true},
        userMMR:{type: String, required: true},
        pieces:{type : Object, required: true}
    },
    {
    timestamps: true,
    }
);

const User = mongoose.model('User', userSchema, "users");

module.exports = User;