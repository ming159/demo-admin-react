import Login from '../pages/login/login.js'
import Register from '../pages/register/register.js'
import Main from '../pages/main/main.js'
import Person from '../pages/person/person.js'
import Home from "../pages/home/index";
import DemoOne from "../pages/demo1/index";
import DemoTwo from "../pages/demo2/index";
import DemoThree from "../pages/demo3/index";

import Setting from '../pages/setting/index'

interface router {
    path: String,
    component: any,
    exact?: boolean,
    children?: Array<router>
}

const routers: Array<router> = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/setting',
                exact: true,
                component: Setting
            },
            {
                path: '/home/person',
                exact: true,
                component: Person
            },
            {
                path: '/home/demoOne',
                exact: true,
                component: DemoOne
            },
            {
                path: '/home/demoTwo',
                exact: true,
                component: DemoTwo
            },
            {
                path: '/home/demoThree',
                exact: true,
                component: DemoThree
            },
            {
                path: '/',
                component: Main
            },
        ]
    },
    {
        path: '/',
        exact: true,
        component: Login,
    },
    {
        path: '/register',
        component: Register,
        children: []
    }
]

export default routers