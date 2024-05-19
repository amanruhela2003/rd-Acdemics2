const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseCode:{type:String , required:true},
    courseFullName : { type:String , required:true},
    courseNickName : { type:String , default:''},
    courseDuration : { type:Number , required :true},
    courseMode : { type:String ,  default:'Semester', enum : ['Yearly' ,'Semester']},
    affiliatedUniversity : { type : String , default:''},
    createdAt: Date,
    updatedAt : Date

});
CourseSchema.plugin(timestamps,{index:true});
module.exports = mongoose.model("Course" , CourseSchema);