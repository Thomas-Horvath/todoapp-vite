import s from '../../styles/todoList.module.scss';
import TodoItem from './ToDoItem/TodoItem';

export default function TodoList(props) {
    const renderList = (items) => items.map(item =>
        <TodoItem 
            key={item.key}
            id={item.key}
            itemName={item.name}
            deleteItem={props.deleteItem}
        />);

    return (
        <ul className={s.todo_list}>
            {renderList(props.itemList)}
        </ul>
    )
}

