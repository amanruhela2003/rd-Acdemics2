<template>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Course</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
<div class="container">
    <div class="alert bg-danger my-2" style="color: brown;">
   <h4 class="text-center" style="color:rgb(43, 58, 58)" width="80%">
   Create Course

   </h4>
</div>
</div>
    <div class="container" width="80%">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <!-- <form > -->
                    <div class="field my-2">
                        <label for="" class="form-label">Course Code:</label>
                        <input type="text" class="form-control" v-model="courseCode"  placeholder="Enter Course code">
                    </div>
                    <div class="field my-2">
                        <label for="" class="form-label">Course Full Name:</label>
                        <input type="text" class="form-control" v-model="courseFullName"  placeholder="Enter Course Name">
                    </div>
                   
                    <div class="field my-2">
                        <label for="" class="form-label">Course Nick Name:</label>
                        <input type="text" class="form-control" v-model="courseNickName"  placeholder="Enter Nick Name">
                    </div>
                    <div class="field my-2">
                        <label for="" class="form-label">Course Duration:</label>
                        <input type="text" class="form-control" v-model="courseDuration"  placeholder="Enter Course Duration">
                    </div>
                    <div class="field my-2">
                        <label for="" class="form-label">Course Mode:</label>
                        <select class="form-select"  v-model="courseMode">
                            <option value = "Semester">Semester</option>
                            <option value = "Yearly">Yearly</option> 
                        </select>
                           
                    </div>

                   
                    <div class="field my-2">
                        <label for="" class="form-label">Affiliated University:</label>
                        <input type="text" class="form-control" v-model="affiliatedUniversity"  placeholder="Enter Affiliated University">
                    </div>
                   
<br>
                    <button @click="addCourse()" class="button">Create Course</button>


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
    name:"CourseCreate",
    data(){
        return{
            courseCode:'',
            courseFullName:'',
            courseNickName:'',
            courseDuration:'',
            courseMode:'Semester',
            affiliatedUniversity:''

        }
       
    },
    methods:{
      async addCourse(){
           try{
            let data={
                courseCode : this.courseCode,
                courseFullName: this.courseFullName,
                courseNickName: this.courseNickName,
                courseDuration : this.courseDuration,
                courseMode :this.courseMode,
                affiliatedUniversity : this.affiliatedUniversity
            }
            
        
         let result = await axios({
            method:'post',
            url:'http://localhost:3000/course/create',
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
    .container{
      width: 80%;
      
    }

</style>