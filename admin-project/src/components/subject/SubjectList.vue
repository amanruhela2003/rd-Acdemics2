<template>
    <div>
      <h1>Subjet list</h1>
  
     <table  class = "table" >
      <thead>
        <tr>
          <th scope="col">Subject Code</th>
          <th scope="col">Subject Name</th>
          <th scope="col">subject Type</th>
          <th scope="col"> Subject Status</th>
          <th scope="col" colspan="2">Action</th>
          <!-- <th scope="col">Action</th> -->
         
  </tr>
  <tr v-for="(subject,index) in subjectsList" :key="index">
  <td>{{ subject.subjectCode }}</td>
  <td>{{ subject.subjectName }}</td>
  <td>{{ subject.subjectType }}</td>
  <td>{{ subject.subjectStatus }}</td>
  <td><button class="btn btn-primary" size="small" @click="openEditPage(subject._id)">Edit</button></td>
  
  <td><button class="btn btn-primary" size="small" @click="deleteSubject(subject._id)">Delete</button></td></tr>
      </thead>
     </table>
    </div>
  
  </template>
  <script>
  import axios from "axios";
  import router from '@/router'
  export default {
    name: "SubjectList",
    data() {
      return {
        subjectsList: [],
      };
    },
    created() {
      this.getSubjectList();
    },
    methods: {
      async getSubjectList() {
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/subjects/list",
        });
        this.subjectsList = result.data.data;
      },
      openEditPage(id){
       router.push({ path: '/subjectedit' + '/' +id})
      },
      async deleteSubject(id){
        let result = await axios({
          method: 'delete',
          url:'http://localhost:3000/subject/delete/' + id
        })
        if(result.data.success){
          this.getSubjectList();
        }
      }
    },
  };
  </script>
  
  
  
  <style>
    .table {
      width: 100%;
      border-collapse: collapse;
    }

    .table th, .table td {
      border: 2px solid #333333; /* Border width increased to 2px */
      padding: 12px;
      text-align: left;
    }

    .table th {
      background-color: #4CAF50;
      color: white;
    }

    .table-row {
      transition: background-color 0.3s;
    }

    .table-row:hover {
      background-color: #f0f0f0;
    }

    .btn {
      display: inline-block;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background-color: transparent;
      border: none;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 1.5;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .btn-primary {
      background-color: #008CBA;
    }

    .btn-danger {
      background-color: #f44336;
    }

    .btn:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .btn:focus {
      outline: none;
    }
  </style>