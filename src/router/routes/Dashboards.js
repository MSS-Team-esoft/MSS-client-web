import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/dashboard/Dashboard'))
  },
  {
    path: '/divisions/manage',
    component: lazy(() => import('../../custom-views/divisionsView/DivisionsView'))
  },
  {
    path: '/employee/manage',
    component: lazy(() => import('../../custom-views/employeeView/EmployeeView'))
  }
]

export default DashboardRoutes
