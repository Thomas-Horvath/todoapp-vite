import s from '../../styles/todoList.module.scss';
import TodoItem from './ToDoItem/TodoItem';

export default function TodoList( props ) {
    const renderList = (items, index) => items.map(item => <TodoItem key={index} itemName={item} /> );

    return (
        <ul className={s.todo_list}>
            {renderList(props.itemList)}
        </ul>
    )
}

