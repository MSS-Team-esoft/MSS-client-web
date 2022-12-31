// ** Icons Import
import {
    Circle, CreditCard, DollarSign,
    Settings, Tool
} from 'react-feather'

export default [
    {
        id: 'inventoryManagement',
        title: 'Inventory',
        icon: <Tool size={12}/>,
        children: [
            {
                id: 'manage',
                title: 'Manage',
                icon: <Circle />,
                navLink: '/inventory/manage'
            },
            // {
            //     id: 'manageDistribution',
            //     title: 'Manage Distribution',
            //     icon: <Circle />,
            //     navLink: '/inventory/distribution'
            // },
            {
                id: 'trackLevel',
                title: 'Stock Tracking',
                icon: <Circle />,
                navLink: '/inventory/tracking'
            }
            // {
            //     id: 'stockRequests',
            //     title: 'Stock Requests',
            //     icon: <Circle />,
            //     navLink: '/inventory/requests'
            // },
            // {
            //     id: 'requestingStock',
            //     title: 'Request Stocks',
            //     icon: <Circle />,
            //     navLink: '/inventory/request/stocks'
            // }
        ]
    },
    {
        id: 'incomeReport',
        title: 'Income Manage',
        icon: <DollarSign size={12}/>,
        navLink: '/income-report'
    },
    {
        id: 'workMonitoringDashboardParent',
        title: 'Work Monitor',
        icon: <CreditCard size={12}/>,
        children: [
            {
                id: 'workMonitoringDashboard',
                title: 'Board',
                icon: <Circle size={12}/>,
                navLink: '/work-monitoring-dashboard'
            },
            {
                id: 'workMonitoringManage',
                title: 'Manage Tasks',
                icon: <Circle size={12}/>,
                navLink: '/work-monitoring/task/create-view'
            }
        ]
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: <Settings size={12}/>,
        children: [
            {
                id: 'divisions',
                title: 'Manage Divisions',
                icon: <Circle />,
                navLink: '/divisions/manage'
            },
            {
                id: 'employee',
                title: 'Manage Employees',
                icon: <Circle />,
                navLink: '/employee/manage'
            }
        ]
    }
]
