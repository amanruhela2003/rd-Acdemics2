<template>
    <h1>This is course edit page</h1>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  
    <div class="container">
      <div class="alert bg-danger my-2" style="color: brown">
        <h4 class="text-center" style="color: rgb(43, 58, 58)">
          Create Your Course
        </h4>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <!-- <form > -->
          <div class="field my-2">
            <label for="" class="form-label">Course Code:</label>
            <input
              type="text"
              class="form-control"
              v-model="courseCode"
              placeholder="Enter Course Code"
            />
          </div>
          <div class="field my-2">
            <label for="" class="form-label">Course Full Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="courseFullName"
              placeholder="Enter Your Course Name"
            />
          </div>
  
          <div class="field my-2">
            <label for="" class="form-label">Course Nick Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="courseNickName"
              placeholder="Enter Your Course Nick Name"
            />
          </div>
          <div class="field my-2">
            <label for="" class="form-label">Course Duration:</label>
            <input
              type="text"
              class="form-control"
              v-model="courseDuration"
              placeholder="Enter Course Duration"
            />
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
            <input
              type="text"
              class="form-control"
              v-model="affiliatedUniversity"
              placeholder="Enter Affiliated University"
            />
          </div>
  
          <br />
          <button @click="updateCourse()" class="btn btn-primary" size="small">
            Update Course
          </button>
  
          <!-- </form> -->
        </div>
        <div class="col"></div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import router from '@/router'
  import { useRoute } from "vue-router";
  export default {
    name: "CourseEdit",
    data() {
      return {
        courseCode:'',
            courseFullName:'',
            courseNickName:'',
            courseDuration:'',
            courseMode:'Semester',
            affiliatedUniversity:'',
            userId: ''
      };
    },
    created() {
       this.getCourseData();
       
    },
    methods: {
      async getCourseData() {
        const route = useRoute();
        let id = route.params.id;
        this.courseId = id
        console.log(id, "id");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/course/for/edit/" + id,
        });
        console.log();
        this.courseCode = result.data.data.courseCode;
        this.courseFullName = result.data.data.courseFullName;
        this.courseNickName = result.data.data.courseNickName;
        this.courseDuration = result.data.data.courseDuration;
        this.courseMode = result.data.data.courseMode;
        this.affiliatedUniversity = result.data.data.affiliatedUniversity;
  
        console.log(result, "result");
      },
      async updateCourse(){
        let data = {
          courseCode:this.courseCode,
          courseFullName:this.courseFullName,
          courseNickName:this.courseNickName,
          courseDuration:this.courseDuration,
          courseMode:this.courseMode,
          affiliatedUniversity:this.affiliatedUniversity
          
        }
        let result = await axios({
          method: "put",
          url: "http://localhost:3000/edit/course/" + this.courseId,
          data:data
        });
      console.log(result,'result');
      if(result.data.success){
              router.push({ 'path':'/courselist'})
          }
      }
    },
  };
  </script>
  