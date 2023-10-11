import React from 'react'

export default function SearchItem({search , setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()} //when we enter on serch item this func stop to reload
    > 
        <label htmlFor='search'
         >Search</label>
         <input id='search'
         type='text'
         role='searchbox'
         placeholder='Search Items' 
         value={search}       // value set to search  
         onChange={(e) => setSearch(e.target.value)}   // setSearch also set to search because we want live search like we enter then show all M in grocery without click enter
          />
      
    </form>
  )
}
