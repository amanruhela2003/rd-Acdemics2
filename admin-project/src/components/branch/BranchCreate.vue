<template>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Branch</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
<div class="container">
    <div class="alert bg-danger my-2" style="color: brown;">
   <h4 class="text-center" style="color:rgb(43, 58, 58)">
   Create Branch

   </h4>
</div>
</div>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <!-- <form > -->
                    <div class="field my-2">
                        <label for="" class="form-label">Branch Code:</label>
                        <input type="text" class="form-control" v-model="branchCode"  placeholder="Enter Branch code">
                    </div>
                    <div class="field my-2">
                        <label for="" class="form-label">Branch Full Name:</label>
                        <input type="text" class="form-control" v-model="branchFullName"  placeholder="Enter Branch Name">
                    </div>
                   
                    <div class="field my-2">
                        <label for="" class="form-label">Branch Nick Name:</label>
                        <input type="text" class="form-control" v-model="branchNickName"  placeholder="Enter Nick Name">
                    </div>
                 
                    <div class="field my-2">
                        <label for="" class="form-label">Courses:</label>
                        <select class="form-select"  v-model="course">
                            <option v-for=" (course , index) in courses" :key="index" :value="course._id"> {{ course.courseFullName }} </option>
                           
                        </select>
                           
                    </div>

                  
<br>
                    <button @click="createBranch()" class="button">Create Course</button>


                <!-- </form> -->
            </div>
            <div class="col"></div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';
import router from '../../router.js'
export default{
    name:"BranchCreate",
    data(){
        return{
            branchCode:'',
            branchFullName:'',
            branchNickName:'',
           course:'',
           courses:[]

        }
       
    },

    created(){
            this.getCourses()
    },
    methods:{
        async getCourses(){
            let result = await axios({
            method:'get',
            url:'http://localhost:3000/courses',
            
        })
        console.log(result.data.data)
        this.courses = result.data.data //isme sare courses h jo create kiye h 
        },
      async createBranch(){
           try{
            let data={
                branchCode : this.branchCode,
                branchFullName: this.branchFullName, 
                branchNickName: this.branchNickName,
               course : this.course
            }
            
        
         let result = await axios({
            method:'post',
            url:'http://localhost:3000/branch/create',
            data:data
        })
        console.log(result , 'result from server')
        if(result.data.success){
          router.push({'path': '/course/create'})
        }
        console.log(result)
           }
           catch(error){
            console.log(error);
           }
    }}

}

</script>

<style>

body {
      font-family: Arial, sans-serif;
      background-color: #f8f9fa;
    }
    .book-form {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }
    .book-form h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      font-weight: bold;
    }
    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ced4da;
      border-radius: 5px;
    }
    .form-check-label {
      font-weight: normal;
    }
</style>