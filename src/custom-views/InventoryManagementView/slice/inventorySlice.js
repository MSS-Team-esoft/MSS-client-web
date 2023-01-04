import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  inventory: [],
  stock: [],
  currentlyEditing: false,
  editingData: null
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
    setCurrentlyEditing(state, action) {
      state.currentlyEditing = true
      state.editingData = action.payload
    },
    editItem(state) {
      state.loading = true
    },
    editItemSuccess(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
    },
    editItemFailure(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
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
export const selectInventoryCurrentlyEditing = (state) => state.inventoryReducer.currentlyEditing
export const selectInventoryEditingData = (state) => state.inventoryReducer.editingData

const inventoryReducer = inventorySlice.reducer
export default inventoryReducer