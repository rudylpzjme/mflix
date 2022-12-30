import React,
{
  useEffect
} from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { filter } from '../../slices/movies'
import { checkGenre, selectSettingsState } from '../../slices/settings'

export interface ISideBar {}

const visibleStyle: React.CSSProperties = {
  display: 'flex',
  position: 'absolute'
}

const hiddenStyle: React.CSSProperties = {
  display: 'none',
}

const SideBar: React.FC<ISideBar> = () => {
  const settings = useSelector(selectSettingsState)
  const dispatch = useDispatch()

  const onClickHandler = (query: string) => {
    dispatch(checkGenre(query))
  }

  useEffect(() => {
    dispatch(filter(settings.selectedGenres))
  }, [dispatch, settings.selectedGenres])

  return (
    <Box
      style={ settings.isSideBarVisible ? visibleStyle : hiddenStyle}
    >
      <List w='200px' overflow='scroll' h='80vh'>
        {
          settings.menuOptions.map((option: string, index:number) => (
            <ListItem
              key={index}
              bgColor='black'
              w='100%'
              p='15px'
              _hover={{ backgroundColor: 'grey' }}
              onClick={() => {
                onClickHandler(option)
              }}
            >
              { settings.selectedGenres.includes(option) &&
                <ListIcon as={CheckIcon} color='green.500' />
              }
              {option}
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default SideBar
