var express = require('express')
var router = express.Router()
var UserModel = require('../model/user')

router.get('/favicon.ico', function (req, res) {
    res.send({code: 200})
})
router.post('/user/register', function (req, res) {
    UserModel.find({username: req.body.username}, function (err, data) {
        if (data.length === 0) {
            var user = new UserModel({
                username: req.body.username,
                password: req.body.password,
                nickname: req.body.nickname
            })
            user.save(function (err, data) {
                if (err) {console.log('baocunshibai');}
                res.send({
                    message: '注册成功',
                    code: 200,
                    data: data
                })
            })
        } else {
            res.send({
                code: 500,
                message: '用户名已存在'
            })
        }
    })
})
router.post('/user/login', function (req, res) {
    var user = {
        username: req.body.username,
        password: req.body.password
    }
    UserModel.find(user, function (err, data) {
        if (data.length > 0) {
            res.send({
                message: '登录成功',
                code: 200,
                data: data
            })
        } else {
            res.send({
                message: '用户名或密码错误',
                code: 500
            })
        }
    })
})
module.exports = router