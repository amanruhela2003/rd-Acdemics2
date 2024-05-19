import { createWebHistory, createRouter } from 'vue-router'
import CourseCreate from './components/course/CourseCreate.vue'
import CourseList from './components/course/CourseList.vue'
import CourseEdit from './components/course/CourseEdit.vue'
import BranchCreate from './components/branch/BranchCreate'
import BranchList from './components/branch/BranchList'
import BranchEdit from './components/branch/BranchEdit'
import SubjectCreate from './components/subject/SubjectCreate.vue'
import SubjectEdit from './components/subject/SubjectEdit.vue'
import SubjectList from './components/subject/SubjectList.vue'
import SideBar from './components/SideBar.vue'


const routes =[
    {
        path: '/course/create' , component: CourseCreate
    },
    {
        path: '/courselist',
        component: CourseList
    },{
        path: '/courseedit/:id',
        component: CourseEdit
    },{
        path: '/branch/create',
        component: BranchCreate
    },
    {
        path: '/branch/list',
        component: BranchList
    },
    {
        path: '/branchedit/:id',
        component: BranchEdit
    },
    {
        path: '/subject/create',
        component: SubjectCreate

    },
    {
        path: '/subjectlist',
        component: SubjectList
    },
    {
        path: '/subjectedit/:id',
        component: SubjectEdit

    },
    {
        path:'/',
        component:SideBar
    }
    
   
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;