import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/运营参数/Table.vue'
import Form from './views/运营参数/Form.vue'
import YydMessege from './views/运营参数/YydMessege.vue'
import Page4 from './views/数据管理/Page4.vue'
import Page5 from './views/数据管理/Page5.vue'
import Page6 from './views/参数管理/Page6.vue'
import Paramver from './views/参数管理/Paramver.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '运营参数',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '种类信息' },
            { path: '/form', component: Form, name: '运营注册' },
            { path: '/YydMessege', component: YydMessege, name: '运营点信息' },
            { path: '/yyd', component: YydMessege, name: '运营点划分' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '交易查询' },
            { path: '/page5', component: Page5, name: '设备交易时间检测' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '参数管理',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/page6', component: Page6, name: '参数管理' },
            { path: '/Paramver', component: Paramver, name: '参数版本管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
