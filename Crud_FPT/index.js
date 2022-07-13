const express = require('express')
const path = require('path')
const route = require('./route')
const app = express()
const port = 3000

//Handlebars
const  handlebars  = require('express-handlebars')

app.engine('hbs',handlebars.engine({
    extname: '.hbs'
  })
);
app.set('view engine', 'hbs');  
app.set('views', path.join('views'))

//Static file
app.use(express.static('public'))

//Using for POST METHOD
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Routes
route(app)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))