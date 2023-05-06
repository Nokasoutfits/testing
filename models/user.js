const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName:{
        type: "String",
        required: true,
        unique: true,
    },
    fullName:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique: true,
    },
    initialPlan:{
        type: "String",
        required: true
    },
    password:{
        type: "String",
        required: true
    },
    account:{
        type: Number,
        default: 0
    },
    intrest:{
        type: Number,
        default: 0
    },
    bonus:{
        type: Number,
        default: 0
    },
    refbonus:{
        type: Number,
        default: 0
    },
    role:{
        type: Number,
        default: 0
    },
    referralCode: {
        type: String,
        unique: true,
      },
    referrer: {
        type: String,
      },
    verified:{
        type: Boolean,
        default: false
    }
}, {timestamps: true
})

const User = mongoose.model("User", UserSchema)

module.exports = User