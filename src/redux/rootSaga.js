import {spawn} from "redux-saga/effects"
import authenticationSagas from "../views/pages/authentication/sagas/authenticationSagas"
import inventorySagas from "../custom-views/InventoryManagementView/sagas/inventorySagas"
import departmentSagas from "../custom-views/divisionsView/sagas/departmentSagas"
import workshopSagas from "../custom-views/ManageWorkshopsView/sagas/workshopSagas"
import employeeSagas from "../custom-views/employeeView/sagas/employeeSagas"
import requestingSagas from "../custom-views/StockRequestingView/sagas/requestingSagas"
import requestSagas from "../custom-views/StockRequestsView/sagas/requestSagas"
import dashboardSagas from "../custom-views/dashboard/sagas/dashboardSagas"
import incomeReportSagas from "../custom-views/IncomeReportView/sagas/incomeReportSagas"
import inventoryTrackingSagas from "../custom-views/StockTrackingView/sagas/inventoryTrackingSagas"
import createWorkSagas from "../custom-views/WorkCreateUnitView/sagas/createWorkSagas"

export default function* rootSaga() {
    yield spawn(authenticationSagas)
    yield spawn(inventorySagas)
    yield spawn(departmentSagas)
    yield spawn(workshopSagas)
    yield spawn(employeeSagas)
    yield spawn(requestingSagas)
    yield spawn(requestSagas)
    yield spawn(dashboardSagas)
    yield spawn(incomeReportSagas)
    yield spawn(inventoryTrackingSagas)
    yield spawn(createWorkSagas)
}