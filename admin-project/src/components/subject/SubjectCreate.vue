<template>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Subject</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
<div class="container">
    <div class="alert bg-danger my-2" style="color: brown;">
   <h4 class="text-center" style="color:rgb(43, 58, 58)">
   Create Subject

   </h4>
</div>
</div>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <!-- <form > -->
                    <div class="field my-2">
                        <label for="" class="form-label">Subject Code:</label>
                        <input type="text" class="form-control" v-model="subjectCode"  placeholder="Enter Subject code">
                    </div>
                    <div class="field my-2">
                        <label for="" class="form-label">Subject Name:</label>
                        <input type="text" class="form-control" v-model="subjectName"  placeholder="Enter Subject Name">
                    </div>
                   
                    
                    <div class="field my-2">
                        <label for="" class="form-label">Subject Type:</label>
                        <select class="form-select"  v-model="subjectType">
                            <option value = "Regular">Regular</option>
                            <option value = "Elective">Elective</option> 
                        </select>
                           
                    </div>

                    <div class="field my-2">
                        <label for="" class="form-label">Subject Status:</label>
                        <select class="form-select"  v-model="subjectStatus">
                            <option value = "Active">Active</option>
                            <option value = "Disabled">Disabled</option> 
                        </select>
                           
                    </div>

                   
                   
                   
<br>
                    <button @click="addSubject()" class="button">Create Subject</button>


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
    name:"SubjectCreate",
    data(){
        return{
            subjectCode:'',
            subjectName:'',
            subjectType: 'Regular',
            subjectStatus: 'Active'
        }
       
    },
    methods:{
      async addSubject(){
           try{
            let data={
                subjectCode : this.subjectCode,
                subjectName: this.subjectName,
                subjectType: this.subjectType,
                subjectStatus: this.subjectStatus  
            }
            
        
         let result = await axios({
            method:'post',
            url:'http://localhost:3000/subject/create',
            data:data
        })
        console.log(result , 'result from server')
        if(result.data.success){
          router.push({'path': '/subject/create'})
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
/* .button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
} */
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