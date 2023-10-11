
import './index.css';
import Section from './components/Section';
import Header from './components/Header'
import Footer from './components/Footer'
import React, { useState ,useEffect } from 'react'
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import API_REQUEST from './components/ApiRequest';
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]) ; // || or simple array is for if user delete alll the data then in ocal storage you have an array  //this is for storing in local like browser        // Simple use State HOOK
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('')
 const [fetchError , setfetchError] = useState(null); 
 const [isLoading , setisLoading] =useState(true);
  useEffect(()=>{
    const fetchItems  = async () =>{
     try{
      const response = await fetch(API_URL);
      if(!response.ok)throw Error("Did not recieve expected data ")
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);   //if ites is loaded then seterror to null
      setfetchError(null);

     }catch(err){
      console.log(err.stack)  // if error is expected then show error
       setfetchError(err.message)
     } finally{
      setisLoading(false);
     }
    } 

    
    setTimeout(() => {
      fetchItems();  
    }, 2000);
       //it will store the the new items in local storage whenever you enter new item  
  }, [] )  // items is for whenever we change in item it will use local storage 
  // if we simply enter [] then this will change after every reload


      // this will store localy in browser as
  
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;  // length starts from 1 so we can minus by 1 because of array starts from 0 then add + 1 for newer id 
    const myNewItem = { id, checked: false, item };  // this is the new that is added
    const listItems = [...items, myNewItem];       // Finaly the spread operator use all the previous items and added new item in listItem Array 
    setItems(listItems);  // this will store localy in browser as

    const postOptions ={
      method : 'POST' ,
      headers : { 
        'Content-Type' :  'applictaion/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await API_REQUEST(API_URL , postOptions)
    if(result) setfetchError(result);
  }

  const handleCheck = (id) => {        // Handlecheck function that keep parameter id 
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)                  // Map func that checks item.id is equal to that id that clicked using ternary operator then use spread to check itme array then !item.checked changed the state
    setItems(listItems);
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);  // it will delete   
    setItems(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();  //it wont reload the page
    if (!newItem) return;    // if thereis nothing in input box then simply return 
    addItem(newItem);
    setNewItem('');  //For disapperaing the input state "for clear the input box "
  }
  return (
    <div className="App">
      <Header title="Grocieries List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch} />
        <main>
          {isLoading && <p>Loading Items...</p>}
          {fetchError && <p style={{color: "red"}} >{`Error: ${fetchError}`}</p>}
     {!fetchError && !isLoading && <Section items={items.filter(item => ((item.item).toLowerCase()).includes
        (search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
