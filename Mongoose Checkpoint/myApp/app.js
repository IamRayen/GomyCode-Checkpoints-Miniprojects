const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./Models/Blog')

const app = express()

const dbURI = 'mongodb+srv://RayenLabidi:euW8TxrN7GQmpJRO@cluster0.jyxgk.mongodb.net/Blog-test?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then(()=>{console.log("connected To DB"),app.listen(4000)})
    .catch((err)=>console.log(err))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('Home')
})

app.get('/add-blog',(req,res)=>{
    new Blog({
        title : 'Cameras 3',
        snippet : 'about Cameras 3',
        body : 'More Information 3'
    }).save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('61b638e1f7d99561dc0d85ad')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

