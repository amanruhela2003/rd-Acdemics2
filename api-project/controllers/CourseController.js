const Course = require('../models/Course')
const createCourse = async(req,res)=>{
    try{
        console.log(req.body)
     let course = new Course(req.body);
     course = await course.save();
     res.status(200).send({status:true, message:'Course created successfully' , data:course})
    }catch(err){
        console.log(err)
        res.status(500).send({status:false, message:'',data:''})
    }
}
//api returning array of object find hmesha array of object and findOne ka return type object

const getCourses = async(req,res)=>{
    try{
        let courses = await Course.find({}, '_id, courseFullName');
        console.log(courses , 'courses')
        res.status(200).send({status:true, message:'Course created successfully' , data:courses})
    }catch(err){
        console.log(err)
        res.status(500).send({status:false, message:'',data:''})
    }
}






const getCoursesList = async(req,res)=>{
    try{
        let courses = await Course.find({});
      
        res.status(200).send({success: true,message: '' , data: courses})
    }catch(err){
        console.log(err);
        res.status(500).send({success: true,message: '' , data: ''})
    }
}
const getCourseForEdit = async(req,res) => {
    try{
        let id = req.params.id;
       
        let course = await Course.findOne({ _id: id});
       
        res.status(200).send({success: true,message: '' , data: course})
    }catch(err){
        console.log(err);
        res.status(500).send({success: false,message: '' , data:" "})
    }
}
const updateCourse = async(req,res)=>{
    try{
        let id = req.params.id;
            console.log(id,'id for update');
            let course = await Course.findOne({_id:id});
            console.log(course,'Course for update')
            course.courseCode  = req.body.courseCode;
            course.courseFullName = req.body.courseFullName;
            course.courseNickName = req.body.courseNickName;
            course.courseDuration = req.body.courseDuration;
            course.courseMode = req.body.courseMode;
            course.affiliatedUniversity = req.body.affiliatedUniversity;
            
            user = await course.save();
            res.status(200).send({success: true , message: '' , data: course})

    }catch(err){
        res.status(500).send({success: false , message: '' , data:" "})
    }
}
const deleteCourse = async(req,res)=>{
    try{
        let id = req.params.id;
        console.log(id,'id for delete');
        let course = await Course.deleteOne({_id:id})
        res.status(200).send({success: true,message: 'Course deleted successfully' , data: course})

    }catch(err){
        res.status(500).send({success: false,message: '' , data:" "})
    }
}
module.exports = {
    createCourse,
    getCoursesList,
    getCourseForEdit,
    updateCourse,
    deleteCourse,
    getCourses
}