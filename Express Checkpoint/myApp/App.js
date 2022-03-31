const express = require('express')
const app = express()
app.set('view engine', 'ejs')

console.log(new Date().getDay())
app.use((req,res,next)=>{
    new Date().getDay() <= 5 && new Date().getDay() >= 1 && new Date().getHours() >= 9 && new Date().getHours() <= 17 ?
    next() : res.send('We are closed! Try Later.') 
})

app.get('/',(req,res)=>{
    res.render('Home');
})
app.get('/our-services',(req,res)=>{
    res.render('Our Services');
})
app.get('/contact',(req,res)=>{
    res.render('Contact us');
})
app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(3000)