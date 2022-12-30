import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  isSideBarVisible: false,
  selectedGenres: ['All'],
  menuOptions: [
    'All',
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

const handleCheckGenre = (prevSelectedGenres: string[], genre: string): string[] => {
  let selectedGenres = prevSelectedGenres
  const existingGenreIndex = selectedGenres.indexOf(genre)
  const allGenresIndex = selectedGenres.indexOf('All')

  if (genre === 'All') return ['All']
  if (allGenresIndex !== -1) selectedGenres.splice(allGenresIndex, 1)

  if (existingGenreIndex !== -1) {
    selectedGenres.splice(existingGenreIndex, 1)
  } else {
    selectedGenres.push(genre)
  }

  return selectedGenres
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
    checkGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenres = handleCheckGenre(state.selectedGenres, action.payload)
    }
  }
})

export const selectSettingsState = (state: RootState) => {
  return state.settings
}
export const { toggleSideBarVisibility, checkGenre } = settings.actions
export default settings.reducer
