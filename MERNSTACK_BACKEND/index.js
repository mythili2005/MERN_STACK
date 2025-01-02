var express = require('express');
var app = express();
const PORT = 3001;

app.get('/',(req,res) => {res.json("Welcome to Backend server")});
app.get('/json',(req,res) => {res.send("Welcome to backend")});
app.get('/static',(req,res)=>{res.sendFile(`D:/MERN_STACK/MERNSTACK_BACKEND/index.html`)});
app.get('/static2',(req,res)=>{res.sendFile(`D:/MERN_STACK/MERNSTACK_BACKEND/static.html`)});
app.listen(PORT,()=>{
    console.log(`Backend server started\nUrl:http://localhost:${PORT}`)
});