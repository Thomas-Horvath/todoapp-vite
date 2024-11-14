import s from './styles/app.module.scss';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState, useEffect } from 'react';

function App() {

  //* lekérjük a mentett lista elemeket
  const itemFromStorage = () => {
    const savedItem = localStorage.getItem('itemList');
    return savedItem ? JSON.parse(savedItem) : [];
  }

  //* lekérjük a következő id-t
  const nextIdFromStorage = () => {
    const savedNextId = localStorage.getItem('nextId');
    return savedNextId ? parseInt(savedNextId, 10) : 0;
  }



  const [itemList, setItemList] = useState(itemFromStorage);
  const [nextId, setNextId] = useState(nextIdFromStorage);


  //* mentjük az elemeket ha változik a state
  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
    localStorage.setItem('nextId', nextId);
  }, [itemList, nextId]);



  const deleteItem = (itemKey) => {
    let newItemList = itemList.filter(item => item.key !== itemKey);
    setItemList(newItemList);
  }

  const addItem = (itemName) => {
    let newItem = {
      name: itemName,
      key: nextId
    }
    let newItemList = [...itemList, newItem];
    setNextId(nextId => nextId + 1);
    setItemList(newItemList);
  }


  return (
    <div className={s.app}>
      <h1>Tevékenységlista</h1>
      <TodoForm addItem={addItem} />
      <TodoList itemList={itemList} deleteItem={deleteItem} />
    </div>
  )
}

export default App;
