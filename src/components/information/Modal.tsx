import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface ModalProps {
  title: string
  children: string | ReactNode
  isOpen: boolean
  setOpen: (open: boolean) => void
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  isOpen,
  setOpen,
  onClose,
}) => {
  const close = () => {
    setOpen(false)
    onClose && onClose()
  }

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={close}
      motionPreset='slideInBottom'
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize='3xl' fontWeight='bold' color='gray.700'>
          {title}
        </ModalHeader>
        <ModalCloseButton color='gray.500' />
        <ModalBody fontSize='xl' color='gray.500'>
          {children}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={close}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
