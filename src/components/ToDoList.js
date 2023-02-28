import ListItem from "./ListItem";
const ToDoList = ({ toDoList, deleteToDo }) => {
  return (
    <ul>
      {toDoList.map((item) => {
        return <ListItem item={item} key={item.id} deleteToDo={deleteToDo} />;
      })}
    </ul>
  );
};

export default ToDoList;
