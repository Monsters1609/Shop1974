import Account from "../Pages/account"
import Cart from "../Pages/cart"
import Home from "../Pages/home"
import Notification from "../Pages/notification"
import Setting from "../Pages/setting"
import Shop from "../Pages/shop"

const publicRouter = [
    {path:'/',component:Home,title:'Home'},
    {path:'/Shop',component:Shop,title:'Shop'},
    {path:'/Notification',component:Notification,title:'Notification'},
    {path:'/Cart',component:Cart,title:'Cart'},
    {path:'/Setting',component:Setting,title:'Setting'},
    {path:'/Account',component:Account,title:'Account'},
]
const privateRouter = [
    
]
export {
    publicRouter,
    privateRouter,
}