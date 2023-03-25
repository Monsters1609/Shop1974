import { manageLayout } from "../Components/ManageLayout"
import {
    account, 
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
} from "../Pages"

const publicRouter = [
    {path:'/',component:home,title:'Home'},
    {path:'/Shop',component:shop,title:'Shop'},
    {path:'/Notification',component:notification,title:'Notification'},
    {path:'/Cart',component:cart,title:'Cart'},
    {path:'/Setting',component:setting,title:'Setting'},
    {path:'/Account',component:account,title:'Account'},
    {path:'/Introduce',component:introduce,title:'Introduce'},
    {path:'/ChartStatistical',component:chartStatistical,title:'ChartStatistical',layout:manageLayout},
    {path:'/Manage',component:manage,title:'Manage',layout:manageLayout},
    {path:'/Update',component:update,title:'Update',layout:manageLayout},
    {path:'/TableList',component:tableList,title:'TableList',layout:manageLayout},
    {path:'/DoneTableList',component:doneTableList,title:'DoneTableList',layout:manageLayout},
    {path:'/Add',component:add,title:'Add',layout:manageLayout},
]
const privateRouter = [
    
]
export {
    publicRouter,
    privateRouter,
}