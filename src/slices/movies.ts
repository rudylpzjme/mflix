import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../assets/movie.data'
import { RootState } from '../store'

const initialState = data

const filterByGenre: any = (genre: string) => {
  console.log(genre)
  return data.filter((movie) => {
    return movie.genres.includes(genre)
  })
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filter(state, action: PayloadAction<string>) {
      return filterByGenre(action.payload)
    },
  }
})

export const selectMoviesState = (state: RootState) => {
  return state.movies
}
export const { filter } = movies.actions
export default movies.reducer
