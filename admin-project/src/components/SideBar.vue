<template>
    <div class="sidebar">
        <div class="title">
            Folders
        </div>
        <div class="menu-items">
            <!-- Links for 'course' -->
            <router-link to="/course/create" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Create Course
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/courselist" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            List Courses
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/courseedit/:id" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Edit Courses
                        </div>
                    </button>
                </template>
            </router-link>
            <!-- Links for 'branch' -->
            <router-link to="/branch/create" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Create Branch
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/branch/list" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            List Branches
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/branchedit/:id" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Edit Branches
                        </div>
                    </button>
                </template>
            </router-link>
            <!-- Links for 'subjects' -->
            <router-link to="/subject/create" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Create Subject
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/subjectlist" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            List Subjects
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/subject/edit" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Edit Subjects
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/subjectlist" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            List Subjects
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/subjectedit/:id" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Edit Subjects
                        </div>
                    </button>
                </template>
            </router-link>
            <!-- Links for 'mapping' -->
            <router-link to="/mapping/create" active-class="active" exact>
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            Create Mapping
                        </div>
                    </button>
                </template>
            </router-link>
            <router-link to="/mapping/list" active-class="active">
                <template v-slot:default="{ navigate }">
                    <button @click="navigate" class="side-btn">
                        <div class="link-container">
                            List Mappings
                        </div>
                    </button>
                </template>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    // No JavaScript logic for now
}
</script>

<style scoped>
.sidebar {
    width: 20%; /* Set width to 20% */
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: hwb(193 3% 62%);
    color: white;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto; /* Add overflow for scrolling if needed */
}

.title {
    font-size: 30px; /* Decrease font size */
    margin-bottom: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
}

.side-btn {
    border: none; /* Remove default button border */
    background-color: transparent;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative; /* Position relative for absolute border */
}

.side-btn:hover {
    background-color: rgba(184, 23, 128, 0.861); /* Change background color on hover */
}

.link-container {
    padding-left: 10px;
    font-size: 16px; /* Decrease font size */
}

.active .link-container {
    color: teal;
}

.side-btn:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid white; /* White border line */
}
</style>
