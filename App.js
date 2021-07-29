import './App.css';
import {useState} from 'react'
import List from './List.js'
import React from 'react'

function App() {
  const [currentItem, setcurrentItem] = useState(null);
  const [itemList, updateitemList] = useState([]);


  const onChangeHandler= e =>{
    setcurrentItem(e.target.value);
  };

  const addItemToList =()=>{
    updateitemList([...itemList,{item:currentItem,key:Date.now}]);

    setcurrentItem("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper"> 
        <div className="Input-Wrapper">
          <h1>
            TO DO LIST
          </h1>
          <input 
          placeholder="Add your task!"
           value={currentItem} 
           onChange={onChangeHandler}/>
          <button onClick={addItemToList}>+</button>

        </div>
        <List itemList={itemList} updateitemList={updateitemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
