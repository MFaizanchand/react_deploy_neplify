import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function AddItem({newItem , setNewItem , handleSubmit}) {
  return (
    
    <form className='addForm' onSubmit={handleSubmit} >
    <label htmlfor='addItem' >Add Item </label>
      <input
      autoFocus
      id='addItem'
      type='text'
      placeholder='Add Items' 
      required
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)} 
       />
       <button type='submit'
       aria-label='Add Item'>
          <FontAwesomeIcon icon={faPlus} /> 
       </button>
    
    </form>
   
  )
}
