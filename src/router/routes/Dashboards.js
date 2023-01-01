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
  },
  {
    path: '/inventory/requests',
    component: lazy(() => import('../../custom-views/StockRequestsView/StockRequestsView'))
  },
  {
    path: '/inventory/request/stocks',
    component: lazy(() => import('../../custom-views/StockRequestingView/StockRequestingView'))
  },
  {
    path: '/income-report',
    component: lazy(() => import('../../custom-views/IncomeReportView/IncomeReportModuleView'))
  },
  {
    path: '/work-monitoring-dashboard',
    component: lazy(() => import('../../custom-views/WorkMonitoringDashboard/WorkMonitoringView'))
  },
  {
    path: '/work-monitoring/unit-view',
    component: lazy(() => import('../../custom-views/WorkMonitoringUnitView/WorkMonitoringUnitView'))
  },
  {
    path: '/work-monitoring/task-manage',
    component: lazy(() => import('../../custom-views/WorkMonitoringManageView/WorkMonitoringManageView'))
  },
  {
    path: '/work-monitoring/task/create-view',
    component: lazy(() => import('../../custom-views/WorkCreateUnitView/WorkCreateUnitView'))
  },
  {
    path: '/workshops/manage',
    component: lazy(() => import('../../custom-views/ManageWorkshopsView/ManageWorkshopView'))
  }
]

export default DashboardRoutes
