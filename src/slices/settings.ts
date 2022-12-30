import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  isSideBarVisible: false,
  menuOptions: [
    'Drama',
    'History',
    'Short',
    'Fantasy',
    'Western',
    'Comedy',
    'Family',
    'Romance',
    'Adventure',
    'War',
    'Animation',
    'Horror',
    'Action',
    'Crime',
    'Sport',
    'Thriller',
    'Documentary',
    'Mystery'
  ],
}

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleSideBarVisibility(state) {
      return {
        ...state,
        isSideBarVisible: !state.isSideBarVisible,
      }
    },
  }
})

export const selectSettingsState = (state: RootState) => {
  return state.settings
}
export const { toggleSideBarVisibility } = settings.actions
export default settings.reducer
