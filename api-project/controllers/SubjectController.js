const Subject = require('../models/Subject')
const createSubject = async(req,res)=>{
    try{
        console.log(req.body)
     let subject = new Subject(req.body);
     subject = await subject.save();
     res.status(200).send({status:true, message:'Course created successfully' , data:subject})
    }catch(err){
        console.log(err)
        res.status(500).send({status:false, message:'',data:''})
    }
}

const getSubjectsList = async(req,res)=>{
    try{
        let subjects = await Subject.find({});
        res.status(200).send({success: true,message: '' , data: subjects})
    }catch(err){
        console.log(err);
        res.status(500).send({success: true,message: '' , data: ''})
    }
}

const getSubjectForEdit = async(req,res) => {
    try{
        let id = req.params.id;
       
        let subject = await Subject.findOne({ _id: id});
        res.status(200).send({success: true,message: '' , data: subject})
    }catch(err){
        console.log(err);
        res.status(500).send({success: false,message: '' , data:" "})
    }
}


const updateSubject = async(req,res)=>{
    try{
        let id = req.params.id;
            console.log(id,'id for update');
            let subject = await Subject.findOne({_id:id});
            console.log(subject,'Course for update')
            subject.subjectCode  = req.body.subjectCode;
            subject.subjectName = req.body.subjectName;
            subject.subjectType = req.body.subjectType;
            subject.subjectStatus = req.body.subjectStatus;
            user = await subject.save();
            res.status(200).send({success: true , message: '' , data: subject})

    }catch(err){
        res.status(500).send({success: false , message: '' , data:" "})
    }
}
const deleteSubject = async(req,res)=>{
    try{
        let id = req.params.id;
        console.log(id,'id for delete');
        let subject = await Subject.deleteOne({_id:id})
        res.status(200).send({success: true,message: 'Course deleted successfully' , data: subject})

    }catch(err){
        res.status(500).send({success: false,message: '' , data:" "})
    }
}

module.exports={
    createSubject,
    getSubjectsList,
    getSubjectForEdit,
    updateSubject,
    deleteSubject
}