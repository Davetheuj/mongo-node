const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{type: String, required: true, unique: true, trim: true, minlength: 3},
        password:{type: String, required: true, minlength: 5},
        first_name:{type: String},
        last_name:{type: String},
        email_address:{type: String},
        physical_address:{type: String},
    },
    {
    timestamps: true,
    }
);

const User = mongoose.model('User', userSchema, "nerds");

module.exports = User;