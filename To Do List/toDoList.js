const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
   console.log(`Server runs at port ${port}`);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const view = path.join(__dirname,'views/');
const ejs = require('ejs');
app.set('view engine','ejs');

//db connectionconst dotenv = require('dotenv');
const mongoose = require('mongoose');

const db = 'mongodb://127.0.0.1:27017/NodejsBasics';

mongoose.connect(db).then(()=>{
    console.log('Database connected')
}).catch((e)=>{
    console.log(`Error connecting! ${e}`)
});


app.set('views', view);

const taskFind = require('./model/task')

//buyer route
app.get('/', async(req,res)=>{
    const taskData = await taskFind.find({taskExist:1})
    res.render('home',{message:'',task:taskData})
})

app.post('/', async(req,res)=>{
    const taskName = req.body.taskName;
    const taskThere = await taskFind.find({taskName:taskName});
    const taskData = await taskFind.find({taskExist:1})
    if(taskThere.length > 0){
        res.render('home',{message:'Task already exists', task:taskData});
    }
    else{
        const newTask = await new taskFind({taskName});
        newTask.save();
        res.render('home',{message:'',task:taskData});
    }
})