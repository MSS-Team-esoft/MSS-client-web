// ** Icons Import
import {
    Circle,
    Settings
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
    }
]
