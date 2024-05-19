<template>
    <h1>This is Subject edit page</h1>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  
    <div class="container">
      <div class="alert bg-danger my-2" style="color: brown">
        <h4 class="text-center" style="color: rgb(43, 58, 58)">
          Create Your Subject
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
            <input
              type="text"
              class="form-control"
              v-model="subjectCode"
              placeholder="Enter Subject Code"
            />
          </div>
          <div class="field my-2">
            <label for="" class="form-label">Subject Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="subjectName"
              placeholder="Enter Your Subject Name"
            />
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
  
          <br />
          <button @click="updateSubject()" class="btn btn-primary" size="small">
            Update Subject
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
    name: "SubjectEdit",
    data() {
      return {
           subjectCode:'',
            subjectName:'',
           subjectType: '',
           subjectStatus: '',
            userId: ''
      };
    },
    created() {
       this.getSubjectData();
       
    },
    methods: {
      async getSubjectData() {
        const route = useRoute();
        let id = route.params.id;
        this.subjectId = id
        console.log(id, "id");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/subject/for/edit/" + id,
        });
        console.log();
        this.subjectCode = result.data.data.subjectCode;
        this.subjectName = result.data.data.subjectName;
        this.subjectType= result.data.data.subjectType,
        this.subjectStatus= result.data.data.subjectStatus
        console.log(result, "result");
      },
      async updateSubject(){
        let data = {
          subjectCode:this.subjectCode,
          subjectName:this.subjectName,
          subjectType:this.subjectType,
          subjectStatus:this.subjectStatus, 
        }
        let result = await axios({
          method: "put",
          url: "http://localhost:3000/edit/subject/" + this.subjectId,
          data:data
        });
      console.log(result,'result');
      if(result.data.success){
              router.push({ 'path':'/subjectlist'})
          }
      }
    },
  };
  </script>