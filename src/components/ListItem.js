import { useState } from "react";

const ListItem = ({ item, deleteToDo }) => {
  const [linethrough, setLinethrough] = useState(false);

  const handleDelete = () => {
    deleteToDo(item.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        id="validation"
        name="validation"
        onChange={(e) => setLinethrough(!linethrough)}
      />
      <span className={linethrough ? "line-through" : ""}>{item.content}</span>
      <i class="fa-regular fa-trash-can" onClick={handleDelete} />
    </li>
  );
};

export default ListItem;
