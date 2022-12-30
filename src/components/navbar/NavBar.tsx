import React from 'react'
import {
  Flex,
  FlexProps,
  Heading,
  HStack,
  IconButton,
  VStack,
  Text,
  Box
} from '@chakra-ui/react'
import {
  BellIcon,
  HamburgerIcon
} from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { toggleSideBarVisibility } from '../../slices/settings'

export interface NavBarProps extends FlexProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const dispatch = useDispatch()
  const toggleSideBar = () => {
    dispatch(toggleSideBarVisibility())
  }

  return (
    <Flex p='20px 40px' justify='space-between' align='center' w='100%'>
      <HStack>
        <IconButton
          aria-label='hambuger menu'
          variant='ghost'
          fontSize='40px'
          color='white'
          marginRight='30px'
          icon={<HamburgerIcon />}
          onClick={toggleSideBar}
        />
        <VStack align='baseline'>
          <Heading
            color='red'
          >
            MFlix
          </Heading>
          <Text
            fontSize='md'
            color='gray'
          >
            by Rodolfo López Jaime
          </Text>
        </VStack>
      </HStack>
      <Box>
        <IconButton
          aria-label='bell icon'
          variant='ghost'
          fontSize='40px'
          icon={<BellIcon />}
          color='white'
        />
      </Box>
    </Flex>
  )
}

export default NavBar;
