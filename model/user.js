const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zychat', {useNewUrlParser: true})

//连接成功终端显示消息
mongoose.connection.on('connected',function () {
    console.log('mongoose connection success')
})
//连接失败终端显示消息
mongoose.connection.on('error',function () {
    console.log('mongoose error')
})
//连接断开终端显示消息
mongoose.connection.on('disconnected',function () {
    console.log('mongoose disconnected')
})
var Schema=mongoose.Schema
// 创建User关系表
const userSchema = new Schema({
    username: String,
    password: String,
    nickname: String
})
const User = mongoose.model('User', userSchema)
module.exports = User