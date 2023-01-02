import {takeLatest} from "redux-saga/effects"
import {inventoryActions} from "../slice/inventorySlice"
import callGetStockSaga from "./callGetStockSaga"
import callAddItemSaga from "./callAddItemSaga"
import callDeleteItemSaga from "./callDeleteItemSaga"
import callEditItemSaga from "./callEditItemSaga"
import callGetStatisticsSaga from "./callGetStatisticsSaga"


export default function* inventorySagas() {
  yield takeLatest(inventoryActions.getItems, callGetStockSaga)
  yield takeLatest(inventoryActions.addItem, callAddItemSaga)
  yield takeLatest(inventoryActions.deleteItem, callDeleteItemSaga)
  yield takeLatest(inventoryActions.editItem, callEditItemSaga)
  yield takeLatest(inventoryActions.getStock, callGetStatisticsSaga)
}