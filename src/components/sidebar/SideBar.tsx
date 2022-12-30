import {
  Box,
  List,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { filter } from '../../slices/movies'
import { selectSettingsState } from '../../slices/settings'

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

  const test = (query: string) => {
    dispatch(filter(query))
  }

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
                test(option)
                console.log(option)
              }}
            >
              {option}
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default SideBar
