const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());


app.get('/',(req,res)=>{
    console.log('Get Request Hit Successfully');
    res.send('get successfull request');
})

app.delete('/:id',(req,res)=>{
    console.log(req.params);
    res.send('Params Successfull');
})

app.post('/',(req,res)=>{
    console.log(req.body);
    console.log('post Request Hit Successfully');
    res.send('post successfull request');
})

app.patch('/',(req,res)=>{
    console.log('patch Request Hit Successfully');
    res.send('patch successfull request');
})

app.delete('/',(req,res)=>{
    console.log('delete Request Hit Successfully');
    res.send('delete successfull request');
})


app.listen(8000,()=>{
    console.log("Server is established over 8000");
})