import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {openModal} from '../../redux/modal/modalSlice'
import Modal from './Modal';
import Modal1 from './Modal1';

const TeachersModal = ({show}) => {
    const { isOpen } = useSelector((store) => store.modal);

    const dispatch = useDispatch();
  return (
    <div>

{isOpen && <Modal/>}
<button className='btn ' onClick={() => dispatch(openModal())}>
          Update Your profile
        </button>
    </div>
  )
}

export default TeachersModal