import s from './styles/app.module.scss';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [itemList, setItemList] = useState([
    "10 km futás",
    "Zuhanzás",
    "Ebéd"
  ]);

  return (
    <div className={s.app}>
      <h1>Tevékenységlista</h1>
      <TodoForm />
      <TodoList itemList={itemList}/>
    </div>
  )
}

export default App;
