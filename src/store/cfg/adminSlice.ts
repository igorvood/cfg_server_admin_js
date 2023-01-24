import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_IS_TABLE_LIST_OPEN = 'LS_IS_TABLE_LIST_OPEN'

interface AdminState {
  isTableListOpen: boolean
}

const initialState: AdminState = {
  isTableListOpen: JSON.parse(localStorage.getItem(LS_IS_TABLE_LIST_OPEN) ?? 'false')

}

export const adminSlice = createSlice({
  name: 'adminState',
  initialState,
  reducers: {
    isTableListOpenGlobalState(state, action: PayloadAction<boolean>) {
      state.isTableListOpen = action.payload
      localStorage.setItem(LS_IS_TABLE_LIST_OPEN, JSON.stringify(state.isTableListOpen))
    },

  }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer