import Modal from '@components/information/Modal'
import { useState } from 'react'

type ModalData = {
  title: string
  description: string
  onClose?: () => void
}

const useModal = (initialState?: ModalData) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ModalData>(
    initialState || { title: '', description: '' }
  )

  const element = (
    <Modal
      title={modalData.title}
      isOpen={isOpen}
      setOpen={setOpen}
      onClose={modalData.onClose}
    >
      {modalData.description}
    </Modal>
  )

  return { isOpen, setOpen, modalData, setModalData, element }
}

export default useModal
