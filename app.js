const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const path = require('path');
const app = express();
const blogRouter = require('./src/routers/blogRouter');
const { urlencoded } = require('express');
const { read } = require('fs');

app.use(express.static('public')) // static dosyalarımızı gösterdik.
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(expressLayouts); 
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./src/views'))



app.use('/',blogRouter)







app.listen(3000, ()=>{
    console.log('3000 portundan server dinleniyor.');
})