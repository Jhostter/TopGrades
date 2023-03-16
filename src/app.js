const express = require("express")
const {engine} = require("express-handlebars")
const myconnection = require("express-myconnection")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const gradesRoutes = require('./routes/grades');
const topgradesRoutes = require('./routes/topgrades');
const app = new express()
const path = require('path')
const { join } = require("path")

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=>{
    console.log("Se esta Escuchando en el puerto", PORT, "in path", path.join(__dirname))
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set("views", __dirname + "/views")

app.engine(".hbs", engine({
    extname: '.hbs'
}))

app.set("view engine", "hbs")

app.use(myconnection(mysql, {
    connectionLimit: 100,
    host: 'db4free.net',
    user: 'timberlake',
    password: '123654hola',
    port: 3306,
    database: 'appgrade'
})) 

app.use('/', gradesRoutes);
app.use('/', topgradesRoutes);


app.use(express.static(__dirname + 'public'))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

console.clear()