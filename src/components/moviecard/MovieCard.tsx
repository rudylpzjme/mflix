import React from 'react'
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure
} from '@chakra-ui/react'

export interface IMovie {
  genres: string[],
  languages?: string[]
  poster: string,
  raiting?: number,
  title?: string,
  directors?: string[],
  writers?: string[],
  plot?: string,
}

const MovieCard: React.FC<IMovie> = ({
  genres,
  languages,
  poster,
  raiting,
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      direction='column'
      w='240px'
      onClick={onOpen}
    >
      <Image alt='poster image' src={poster} objectFit='cover' maxW='240' maxH='320' />
      <Text
        fontWeight='bold'
        fontSize='16px'
        color='white'
        mt='5px'
      >
        { genres.toString().replaceAll(',', ' | ') }
      </Text>
      {
        languages &&
          <Text
            fontWeight='normal'
            fontSize='14px'
            color='red'>
            { languages.toString().replaceAll(',', ' | ') }
          </Text>
      }
      {
        raiting &&
          <Tag
            size='lg'
            m='10px 0px'
            bgColor='blue'
            color='white'
            w='fit-content'
          >
            {raiting} / 10
          </Tag>
      }
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='black' textAlign='center'>{rest.title || 'Unknown title'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody color='black'>
            { rest.plot || 'Unknown plot' }
          </ModalBody>
          <ModalFooter justifyContent='center'>
            <Button
              mr={3}
              bgColor='black'
              _hover={{ backgroundColor: 'grey' }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default MovieCard;
