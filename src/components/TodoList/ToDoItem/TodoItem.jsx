export default function TodoItem(props) {
    const { itemName } = props;
    return (
        <li>
            {itemName}<button>Töröl</button>
        </li>
    )
}