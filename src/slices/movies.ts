import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../assets/movie.data'
import { RootState } from '../store'

const initialState = data

const filterByGenres = (selectedGenres: string[]) => {
  if (JSON.stringify(selectedGenres) === JSON.stringify(['All'])) return data

  return data.filter((movie) => {
    return movie.genres.some(genre => selectedGenres.includes(genre))
  })
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filter(state, action: PayloadAction<string[]>) {
      return filterByGenres(action.payload)
    },
  }
})

export const selectMoviesState = (state: RootState) => {
  return state.movies
}
export const { filter } = movies.actions
export default movies.reducer
