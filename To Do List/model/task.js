const mongoose = require('mongoose');
const task = mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    taskExist:{
        type:Number,
        default:1
    }
})

const save = mongoose.model('TASK', task)
module.exports = save;