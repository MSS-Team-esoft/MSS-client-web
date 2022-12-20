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
  },
  {
    path: '/inventory/manage',
    component: lazy(() => import('../../custom-views/InventoryManagementView/InventoryManagementView'))
  }
]

export default DashboardRoutes
