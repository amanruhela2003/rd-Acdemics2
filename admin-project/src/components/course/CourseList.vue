<template>

  <div class="table-container">
    <h1>Course list</h1>

    
  </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Course Code</th>
          <th scope="col">Course Full Name</th>
          <th scope="col">Course Nick Name</th>
          <th scope="col">Course Duration</th>
          <th scope="col">Course Mode</th>
          <th scope="col">Affiliated University</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in coursesList" :key="index" :class="{ 'table-row': index % 2 !== 0 }">
          <td>{{ course.courseCode }}</td>
          <td>{{ course.courseFullName }}</td>
          <td>{{ course.courseNickName }}</td>
          <td>{{ course.courseDuration }}</td>
          <td>{{ course.courseMode }}</td>
          <td>{{ course.affiliatedUniversity }}</td>
          <td><button class="btn btn-primary" size="small" @click="openEditPage(course._id)">Edit</button></td>
          <td><button class="btn btn-danger" size="small" @click="deleteCourse(course._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  
</template>

<script>
import axios from "axios";
import router from '@/router'
export default {
  name: "CourseList",
  data() {
    return {
      coursesList: [],
    };
  },
  created() {
    this.getCourseList();
  },
  methods: {
    async getCourseList() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/courses/list",
      });
      this.coursesList = result.data.data;
    },
    openEditPage(id) {
      router.push({ path: '/courseedit' + '/' + id })
    },
    async deleteCourse(id) {
      let result = await axios({
        method: 'delete',
        url: 'http://localhost:3000/course/delete/' + id
      })
      if (result.data.success) {
        this.getCourseList();
      }
    }
  },
};
</script>

<style scoped>
/* Update the table style to fit within the page and move it to the left */
.table-container {
    display: flex;
    justify-content: flex-start;
    margin-left: 20%; /* Adjust for the sidebar width */
}

.table {
    width: 60%; /* Adjust the width as needed */
    border-collapse: collapse;
    background-color: #f5faff; /* Light blue background color */
    color: #333333; /* Dark text color */
    font-size: 14px; /* Decrease font size */
}

/* Adjust the margin and width for smaller screens */
@media (max-width: 768px) {
    .table-container {
        margin-left: 1%; /* Adjust for the sidebar width */
    }
    .table {
        width: 90%; /* Adjust the width for smaller screens */
    }
}

/* Decrease padding for smaller table cells */
.table th,
.table td {
    padding: 8px; /* Decrease padding */
}
</style>
