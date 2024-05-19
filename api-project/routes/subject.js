const express = require('express')
const router = express.Router();
const SubjectController = require('../controllers/SubjectController')

router.post('/subject/create' , (req,res)=>{
    SubjectController.createSubject(req,res)
})

router.get('/subjects/list',(req,res)=>{
    SubjectController.getSubjectsList(req,res)
})

router.get('/subject/for/edit/:id', (req,res)=>{
    SubjectController.getSubjectForEdit(req,res)
})

router.put('/edit/subject/:id' , (req,res)=>{
    SubjectController.updateSubject(req,res)
})
router.delete('/subject/delete/:id' ,(req,res)=>{
    SubjectController.deleteSubject(req,res)
})

module.exports= router;