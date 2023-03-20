import {account, cart, home, introduce, notification, setting, shop} from "../Pages"

const publicRouter = [
    {path:'/',component:home,title:'Home'},
    {path:'/Shop',component:shop,title:'Shop'},
    {path:'/Notification',component:notification,title:'Notification'},
    {path:'/Cart',component:cart,title:'Cart'},
    {path:'/Setting',component:setting,title:'Setting'},
    {path:'/Account',component:account,title:'Account'},
    {path:'/Introduce',component:introduce,title:'Introduce'},
]
const privateRouter = [
    
]
export {
    publicRouter,
    privateRouter,
}