var express = require('express')
var path = require('path')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// index page
app.get('/', function (req, res) {
  res.render('pages/index')
})

app.listen(process.env.PORT || 3000)
console.log('Server is listening on port 3000')
