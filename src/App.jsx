import s from './styles/app.module.scss';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [itemList, setItemList] = useState([
    {
      name: "10 km futás",
      key: 0
    },
    {
      name: "Zuhanzás",
      key: 1
    },
    {
      name: "Ebéd",
      key: 3
    }
  ]);
const [nextId, seztNextId] = useState(0);

  const deleteItem = (itemKey) => {
    let newItemList = itemList.filter(item => item.key !== itemKey);
    setItemList(newItemList);
  }

  const addItem = (itemName) => {

  }


  return (
    <div className={s.app}>
      <h1>Tevékenységlista</h1>
      <TodoForm />
      <TodoList itemList={itemList} deleteItem={deleteItem}/>
    </div>
  )
}

export default App;
