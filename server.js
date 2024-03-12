const express = require ('express');
const app = express();
//console.dir(app);
app.set('view engine','ejs');


app.get ("/",(req,res)=>{
    console.log("get 1");
    //res.send({"test":1});
    res.render('home');
});

app.get("/db",(req,res)=>{
    const num = Math.floor(Math.random()*10)
    res.render('db',{rand:num})
})

app.get ("/serch",(req,res)=>{
    const {q}= req.query;
    console.log(`クエリ：${q}`);
    res.send({"test":1});

});

app.use((req,res)=>{
    console.log('リクエスト');
   //res.send('responce !!!');
    
});

app.listen(3000,()=>{
console.log('3000で受信中');

});