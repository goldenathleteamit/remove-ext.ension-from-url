//REMOVE EXTENSION LIKE .html FROM THE URL
const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'public');

app.get('/about',(req,res)=>{
   res.sendFile(`${publicPath}/about.html`);
});

//pagenotfound
app.get('*',(req,res)=>{
   res.sendFile(`${publicPath}/pgnotfound.html`);
});

app.listen(4600);