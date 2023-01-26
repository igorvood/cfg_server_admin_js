import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_IS_TABLE_LIST_OPEN = 'LS_IS_TABLE_LIST_OPEN'
const LS_CURRENT_TABLE_NAME = 'LS_CURRENT_TABLE_NAME'

interface AdminState {
  isTableListOpen: boolean
  currentTableName: string
}

const initialState: AdminState = {
  isTableListOpen: JSON.parse(localStorage.getItem(LS_IS_TABLE_LIST_OPEN) ?? 'false'),
  currentTableName: JSON.parse(localStorage.getItem(LS_CURRENT_TABLE_NAME) ?? '{}')

}

export const adminSlice = createSlice({
  name: 'adminState',
  initialState,
  reducers: {
    isTableListOpenGlobalState(state, action: PayloadAction<boolean>) {
      state.isTableListOpen = action.payload
      localStorage.setItem(LS_IS_TABLE_LIST_OPEN, JSON.stringify(state.isTableListOpen))
    },
    currentTableNameGlobalState(state, action: PayloadAction<string>) {
      state.currentTableName = action.payload
      localStorage.setItem(LS_CURRENT_TABLE_NAME, JSON.stringify(state.currentTableName))
    },
  }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer