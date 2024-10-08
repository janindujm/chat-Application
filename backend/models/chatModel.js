const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroutChat:{type:  Boolean,default:false},
        users: [{
            typeof: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        }

    },
    {
        timestamps:true,
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;