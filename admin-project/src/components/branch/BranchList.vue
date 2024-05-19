<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Branch Form</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
  
  <div>
    <input type="text" class="form-control" v-model="listQuery.name" placeholder="Enter Branch to search..." @input="getBranchList()">
    <h1 class="text-center mt-5 mb-4">Branch List</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="styled-heading">Branch Code</th>
          <th scope="col" class="styled-heading">Branch Full Name</th>
          <th scope="col" class="styled-heading">Branch Nick Name</th>
          <th scope="col" class="styled-heading">Course</th>
          <th scope="col" colspan="2" class="styled-heading">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(branch, index) in branchList" :key="index"
            :class="{ 'table-row': index % 2 !== 0, 'colored-row': index % 2 === 0 }">
          <td>{{ branch.branchCode }}</td>
          <td>{{ branch.branchFullName }}</td>
          <td>{{ branch.branchNickName }}</td>
          <td>{{ branch.course.courseFullName }}</td>
          <td><button class="btn btn-green" size="small" @click="openEditPage(branch._id)">Edit</button></td>
          <td><button class="btn btn-red" size="small" @click="deleteBranch(branch._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="...">
  <ul class="pagination pagination-lg">
    
    <li v-for="n in nop" :key="n" class="page-item page-link" @click="getData(n)">{{ n }}</li>
  </ul>
</nav>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "BranchList",
  data() {
    return {
      branchList: [],
      listQuery : {
        name: '',
        page:1,
        limit : 2
      },
      nop:1
    };
  },
  created() {
    this.getBranchList();
  },
  methods: {
    async getBranchList() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/branches",
        params: this.listQuery
      });
      console.log(result);
      this.branchList = result.data.data
      this.nop = Math.ceil(result.data.totalCount/this.listQuery.limit)
    },
    openEditPage(id) {
      router.push({ path: "/branchedit" + "/" + id });
    },
    async deleteBranch(id) {
      let result = await axios({
        method: "delete",
        url: "http://localhost:3000/branch/delete/" + id,
      });
      if (result.data.success) {
        this.getBranchList();
      }
    },
    getData(n){
      this.listQuery.page = n;
      this.getBranchList();
    }
  },
};
</script>

<style>
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f5faff; /* Light blue background color */
    color: #333333; /* Dark text color */
  }

  .table th,
  .table td {
    border: 2px solid #000000; /* Black border color */
    padding: 12px;
    text-align: left;
  }

  .table th {
    background-color: #0077cc; /* Dark blue header background color */
    color: white; /* White text color */
  }

  .table tbody tr:nth-child(odd) {
    background-color: #e6f5ff; /* Lighter shade of blue for alternate rows */
  }

  .table-row {
    transition: background-color 0.3s;
  }

  .table-row:hover {
    background-color: #b3d1e0; /* Hover effect color */
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
    background-color: #4caf50; /* Green button color */
  }

  .btn-primary:hover {
    background-color: #388e3c; /* Darker shade of green on hover */
  }

  .btn-danger {
    background-color: #f44336; /* Red button color */
  }

  .btn-danger:hover {
    background-color: #d73925; /* Darker shade of red on hover */
  }

  .btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .btn:focus {
    outline: none;
  }
</style>

