const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const matchmakingUserSchema = new Schema(
    {
        userName:{type: String, required: true, unique: true, trim: true},
        joinCode:{type: String, required: true},
        userMMR:{type: Number, required: true},
    },
    {
    timestamps: true,
    }
);

const MatchmakingUser = mongoose.model('MatchmakingUser', matchmakingUserSchema, "matchmakingUsers");

module.exports = MatchmakingUser;