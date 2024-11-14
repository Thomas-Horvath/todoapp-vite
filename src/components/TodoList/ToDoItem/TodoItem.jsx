import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem(props) {
    const { itemName, deleteItem , id } = props;

    const handleDelete = (e) => {
        e.preventDefault();
        deleteItem(id)
    }

    return (
        <li>
           {itemName}<button onClick={handleDelete}><RiDeleteBin6Line /></button>
        </li>
    )
}