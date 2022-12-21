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
  },
  {
    path: '/inventory/distribution',
    component: lazy(() => import('../../custom-views/MotherDistributionManagementView/MotherDistributionManagementView'))
  },
  {
    path: '/inventory/tracking',
    component: lazy(() => import('../../custom-views/StockTrackingView/StockTrackingView'))
  }
]

export default DashboardRoutes
