import React from 'react'
import { Flex, HStack } from '@chakra-ui/react'
import MovieCard from '../components/moviecard/MovieCard'
import { useSelector } from 'react-redux'
import { selectMoviesState } from '../slices/movies'

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const movies = useSelector(selectMoviesState)
  return (
    <Flex overflowX='scroll' w='100vw'>
      <HStack alignItems='baseline'>
      {
        movies.map((movie) =>
          <MovieCard
            key={movie._id}
            {...movie}
            genres={movie.genres}
            languages={movie.languages}
            poster={movie.poster}
            raiting={movie.tomatoes.critic?.rating}
          />
        )
      }
      </HStack>
    </Flex>
  )
}

export default HomePage
