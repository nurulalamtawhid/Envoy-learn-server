const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.Port || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');
app.get('/course-categories',(req,res)=>{
    res.send(categories);
})
const courses = require('./Data/Courses.json');


app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const selectedcategory = courses.filter(course => course.category_id ===id);
    res.send(selectedcategory);

})
app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const selectedcourses = courses.find(course=>course._id ===id);
    res.send(selectedcourses);
})
app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id;
    const selectedcourses = courses.find(course=>course._id ===id);
    res.send(selectedcourses);
})

app.listen(Port,()=>{
    console.log("serverr on",Port);
});
app.get("/",(req,res)=>{
    res.send("bro running")
})