import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GridCellEditCommitParams} from "@mui/x-data-grid/models/params/gridEditCellParams";

const LS_IS_TABLE_LIST_OPEN = 'LS_IS_TABLE_LIST_OPEN'
const LS_CURRENT_TABLE_NAME = 'LS_CURRENT_TABLE_NAME'
const LS_EDITED_DATA = 'LS_EDITED_DATA'

interface AdminState {
  isTableListOpen: boolean
  currentTableName: string

  editedData: GridCellEditCommitParams[]

}

const initialState: AdminState = {
  isTableListOpen: JSON.parse(localStorage.getItem(LS_IS_TABLE_LIST_OPEN) ?? 'false'),
  currentTableName: JSON.parse(localStorage.getItem(LS_CURRENT_TABLE_NAME) ?? '{}'),
  editedData: JSON.parse(localStorage.getItem(LS_EDITED_DATA) ?? '[]'),

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

    editedDataGlobalState(state, action: PayloadAction<GridCellEditCommitParams>) {
      let payload = action.payload;
      state.editedData.push(payload)
      localStorage.setItem(LS_EDITED_DATA, JSON.stringify(state.editedData))
    },

  }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer