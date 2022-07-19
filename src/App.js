import './App.css';
import {useState} from "react";
import List from'./List'
function App() {
  const[currentItem,setCurrentItem]=useState("");
  const[itemList,updateItemlist]= useState([]);
  const onChangeHandler=e=>{
    console.log("current vaslue",e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList=()=>{
    updateItemlist([...itemList, {item:currentItem, key:Date.now()}]);
    // console.log("list items", itemList);
    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
       <div className="input-weapper">
       <input value= {currentItem} onChange={onChangeHandler} /> 
       <button onClick={addItemToList}>+</button>
       </div>
       <List itemList={itemList}/>
       </div>
      </header>
    </div>
  );
}

export default App;
