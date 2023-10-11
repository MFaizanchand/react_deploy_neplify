


import ItemList from './ItemList'
export default function Section({items,  handleCheck , handleDelete}) {
  return (
    <>
    {items.length ? ( //just for showing that the list is empty ternary operator
    
      <ItemList
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
    ):(
      <p style={{marginTop:'2rem'}} >Your List is Empty</p>  // ternary 
     )}
    </>
  )
}
