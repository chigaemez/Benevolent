import React, { useContext} from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { GlobalContext } from '../../context/GlobalState'


const AddItem = ({onAdd, onRemove}) => {
  const{increase}= useContext(GlobalContext)


   

  return (

    <div className='addings'>


      <FaMinus className='minus' onMouseUp={onRemove} />
      <p className='number'>{increase}</p>
      <FaPlus className='plus' onClick={(increase)} />
    </div>
  )
}

export default AddItem
