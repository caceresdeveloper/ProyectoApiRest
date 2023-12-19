const mongoose = require('mongoose')
const {Schema} = mongoose;
const UsersSchema = new Schema ({
    id_user:{
        type : String,
        required : true,
        unique : true
    },

    user: {
        type : String,
        required : true,
        unique : true
    }, 

    password: {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('users', UsersSchema)