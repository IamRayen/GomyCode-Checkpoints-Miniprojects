const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Html.html');
});
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname + '/Contact.html');
});
app.get('/Profile/:id',(req,res)=>{
    const data = {age: 19, job: 'webDevelopper',hobbies: ['Guitarre', 'Reading', 'Sports', 'Cooking']}
    res.render('profile',{person: req.params.id,data: data})
})
console.log('App is Listening...')
app.listen(3000);

