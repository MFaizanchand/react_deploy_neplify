import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function LineItem({item,  handleCheck , handleDelete}) {
  return (
    <li className='item' key={item.id} >
    <input
      type="checkbox"
      onChange={() => handleCheck(item.id)}
      checked={item.checked}
    />
    <label
      style={(item.checked) ? { textDecoration: 'line-through' } : null}
      onDoubleClick={() => handleCheck(item.id)}
    >
      {item.item}</label>


    <FontAwesomeIcon 
    onClick={() =>handleDelete(item.id)}
    icon={faTrash}
      role='button'
      tabIndex="0" />
  </li>   
          

  )
}
