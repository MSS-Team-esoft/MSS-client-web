import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  inventory: [],
  stock: []
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers:{
    // eslint-disable-next-line no-unused-vars
    addItem(state, action) {
      state.loading = true
    },
    addItemSuccess(state) {
      state.loading = false
    },
    addItemFailure(state) {
      state.loading = false
    },
    getItems(state) {
      state.loading = true
    },
    saveItems(state, action) {
      state.loading = false
      state.inventory = action.payload
    },
    getItemsFailure(state) {
      state.loading = false
    },
    editItem(state) {
      state.loading = true
    },
    editItemSuccess(state) {
      state.loading = false
    },
    editItemFailure(state) {
      state.loading = false
    },
    deleteItem(state) {
      state.loading = true
    },
    deleteItemSuccess(state) {
      state.loading = false
    },
    deleteItemFailure(state) {
      state.loading = false
    },
    getStock(state) {
      state.loading = true
    },
    saveStock(state, action) {
      state.loading = false
      state.stock = action.payload
    },
    getStockFailure(state) {
      state.loading = false
    }
  }
})

export const inventoryActions = inventorySlice.actions

export const selectInventoryLoading = (state) => state.inventoryReducer.loading
export const selectInventoryItems = (state) => state.inventoryReducer.inventory

const inventoryReducer = inventorySlice.reducer
export default inventoryReducer