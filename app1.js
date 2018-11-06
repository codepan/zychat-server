const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()

app.set('port', 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.statusCode = 200
    res.end()
  } else {
    next()
  }
})


app.get('/findContacts', (req, res) => {
  res.json({
    meta: {
      code: 200
    },
    data: [
      {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538131365701&di=6957bb19540d5227885f24d90cac1a5f&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F03%2F20150403H2635_8BeFV.jpeg',
        remarkName: '宋江',
        nickname: '及时雨',
        chatNo: 'jsy',
        phone: '18801561174'
      },
      {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538131784629&di=d2196b0fb3a97dd68c82c3fc6c68f3d6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201409%2F22%2F20140922041457_rSmce.thumb.200_200_c.jpeg',
        remarkName: '李逵',
        nickname: '黑旋风',
        chatNo: 'lk',
        phone: '15035792245'
      }
    ]
  })
})

app.get('/user/register', (req, res) => {
    let query = req.query
    if ((JSON.stringify(userInfos).indexOf(JSON.stringify(query))) !== -1) {
        res.json({
            code: 500,
            message: '用户名或密码已存在'
        })
    }
    userInfos.push(query)
    res.json({
        code: 200,
        message: 'success'
    })
})

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server running on http://localhost:${app.get('port')}`)
})
