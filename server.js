const express = require('express');
const app = express();

app.set('views','public/views');
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.listen(8080,function(){
    console.log('server on ');
})

app.get('/',function(req,res){
    res.render('index.ejs');
})
