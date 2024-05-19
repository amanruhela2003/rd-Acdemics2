const express = require('express')
const router = express.Router();
const BranchController = require('../controllers/BranchController')


router.post('/branch/create' , (req,res)=>{
    BranchController.createBranch(req,res)
})

router.get('/branches' , (req,res)=>{
    BranchController.getBranches(req,res);
})

router.get('/branch/for/edit/:id', (req,res)=>{
    BranchController.getBranchForEdit(req,res)
})

router.put('/edit/branch/:id' , (req,res)=>{
    BranchController.updateBranch(req,res)
})

router.delete('/branch/delete/:id' ,(req,res)=>{
    BranchController.deleteBranch(req,res)
})


module.exports= router;