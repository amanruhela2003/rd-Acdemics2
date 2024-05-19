<template>

  <div>
    <div class="container">
      <div class="alert alert-primary text-center mt-5">
        <h1>This is branch edit page</h1>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card shadow p-4">
            <div class="field my-2">
              <label for="branchCode" class="form-label">Branch Code:</label>
              <input
                type="text"
                id="branchCode"
                class="form-control"
                v-model="branchCode"
                placeholder="Enter Branch Code"
              />
            </div>
            <div class="field my-2">
              <label for="branchFullName" class="form-label">Branch Full Name:</label>
              <input
                type="text"
                id="branchFullName"
                class="form-control"
                v-model="branchFullName"
                placeholder="Enter Your Branch Name"
              />
            </div>

            <div class="field my-2">
              <label for="branchNickName" class="form-label">Branch Nick Name:</label>
              <input
                type="text"
                id="branchNickName"
                class="form-control"
                v-model="branchNickName"
                placeholder="Enter Your Branch Nick Name"
              />
            </div>
            <div class="field my-2">
              <label for="course" class="form-label">Course</label>
              <select class="form-select" id="course" v-model="course">
                <option v-for="(course, index) in courses" :key="index" :value="course._id">{{ course.courseFullName }}</option>
              </select>
            </div>

            <div class="d-grid gap-2 mt-3">
              <button @click="updateBranch()" class="btn btn-primary btn-lg">Update Branch</button>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '@/router';
import { useRoute } from "vue-router";

export default {
  name: "BranchEdit",
  data() {
    return {
      branchCode:'',
      branchFullName:'',
      branchNickName:'',
      course: '',
      courses: [],
      branchId: ''
    };
  },
  created() {
    this.getBranchData();
    this.getCourses();
  },
  methods: {
    async getCourses() {
      let result = await axios({
        method:'get',
        url:'http://localhost:3000/courses',
      });
      console.log(result.data.data);
      this.courses = result.data.data;
    },
    async getBranchData() {
      const route = useRoute();
      let id = route.params.id;
      this.branchId = id;
      console.log(id, "id");
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/branch/for/edit/" + id,
      });
      this.branchCode = result.data.data.branchCode;
      this.branchFullName = result.data.data.branchFullName;
      this.branchNickName = result.data.data.branchNickName;
      this.course = result.data.data.course;
      console.log(result, "result");
    },
    async updateBranch() {
      let data = {
        branchCode:this.branchCode,
        branchFullName:this.branchFullName,
        branchNickName:this.branchNickName,
        course: this.course,
      };
      let result = await axios({
        method: "put",
        url: "http://localhost:3000/edit/branch/" + this.branchId,
        data:data
      });
      console.log(result,'result');
      if(result.data.success) {
        router.push({ 'path': '/branch/list' });
      }
    }
  },
};
</script>

<style>
.field {
  margin-bottom: 1.5rem;
}
.card {
  border-radius: 15px;
}
</style>
