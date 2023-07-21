import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {openModal} from '../../redux/modal/teacherModel'
import Modal from './Modal';
import Modal1 from './Modal1';
const TeachersModal = ({show}) => {
    const { isOpen } = useSelector((store) => store.teacher);

    const dispatch = useDispatch();
  return (
    <div>

{isOpen &&<Modal1/>}
<button className='btn ' onClick={() => dispatch(openModal())}>
          update profile
        </button>
    </div>
  )
}

export default TeachersModal