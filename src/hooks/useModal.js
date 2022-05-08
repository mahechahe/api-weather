import {useState} from 'react'

export const useModal = () => {

  const [openModal, setOpenModal] = useState(false)
  
  const closeModal = () => {
      setOpenModal(false)
  }
  const openModalTotal = () => {
      setOpenModal(true)
  }

  return {
    openModal, 
    closeModal,
    openModalTotal
  }
}
