import { manageLayout } from "../Components/ManageLayout"
import {
    login,
    register,
    cart, 
    home, 
    introduce, 
    notification, 
    setting, 
    shop, 
    manage, 
    add, 
    update,
    tableList,
    doneTableList,
    chartStatistical,
    userDetail,
} from "../Pages"

const publicRouter = [
    {path:'/',component:home,title:'Home'},
    {path:'/Shop',component:shop,title:'Shop'},
    {path:'/Notification',component:notification,title:'Notification'},
    {path:'/Cart',component:cart,title:'Cart'},
    {path:'/Setting',component:setting,title:'Setting'},
    {path:'/Login',component:login,title:'Login'},
    {path:'/Introduce',component:introduce,title:'Introduce'},
    {path:'/Manage',component:manage,title:'Manage',layout:manageLayout},
    {path:'/Register',component:register,title:'Register',layout:manageLayout},
    {path:'/ChartStatistical',component:chartStatistical,title:'ChartStatistical',layout:manageLayout},
    {path:'/Update',component:update,title:'Update',layout:manageLayout},
    {path:'/TableList',component:tableList,title:'TableList',layout:manageLayout},
    {path:'/DoneTableList',component:doneTableList,title:'DoneTableList',layout:manageLayout},
    {path:'/Add',component:add,title:'Add',layout:manageLayout},
    {path:'/UserDetail',component:userDetail,title:'UserDetail',layout:manageLayout},
]
const privateRouter = [
    
]
export {
    publicRouter,
    privateRouter,
}