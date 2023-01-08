import {combineReducers} from "@reduxjs/toolkit"
// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import authenticationReducer from "@src/views/pages/authentication/slice/authenticationSlice"
import inventoryReducer from "@src/custom-views/InventoryManagementView/slice/inventorySlice"
import departmentReducer from "@src/custom-views/divisionsView/slice/departmentSlice"
import workshopReducer from "@src/custom-views/ManageWorkshopsView/slice/workshopSlice"
import employeeReducer from "@src/custom-views/employeeView/slice/employeeSlice"
import distributionReducer from "@src/custom-views/MotherDistributionManagementView/slice/motherDistributionSlice"
import requestReducer from "@src/custom-views/StockRequestsView/slice/requestSlice"
import requestingReducer from "@src/custom-views/StockRequestingView/slice/requestingSlice"
import incomeReportReducer from "@src/custom-views/IncomeReportView/slice/incomeReportSlice"
import inventoryTrackingReducer from "@src/custom-views/StockTrackingView/slice/inventoryTrackingSlice"
import createWorkReducer from "@src/custom-views/WorkCreateUnitView/slice/createWorkSlice"
import dashboardReducer from "@src/custom-views/dashboard/slice/dashboardSlice"

const rootReducer = combineReducers({
  authenticationReducer,
  navbar,
  layout,
  auth,
  todo,
  chat,
  users,
  email,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  inventoryReducer,
  departmentReducer,
  workshopReducer,
  employeeReducer,
  distributionReducer,
  requestReducer,
  requestingReducer,
  incomeReportReducer,
  inventoryTrackingReducer,
  createWorkReducer,
  dashboardReducer
})

export default rootReducer
