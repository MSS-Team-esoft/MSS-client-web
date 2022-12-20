// ** Icons Import
import {
    Circle,
    Settings, Tool
} from 'react-feather'

export default [
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
    },
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
            {
                id: 'manageDistribution',
                title: 'Manage Distribution',
                icon: <Circle />,
                navLink: '/inventory/distribution'
            },
            {
                id: 'trackLevel',
                title: 'Stock Tracking',
                icon: <Circle />,
                navLink: '/inventory/tracking'
            },
            {
                id: 'stockRequests',
                title: 'Stock Requests',
                icon: <Circle />,
                navLink: '/inventory/requests'
            }
        ]
    }
]
