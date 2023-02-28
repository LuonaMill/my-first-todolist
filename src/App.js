import Header from "./components/Header";
import "./App.css";
import AddToDo from "./components/AddToDo";
import { useState } from "react";
import ToDoList from "./components/ToDoList";

//Missions de la todo
//1) Créer un input et un bouton ajouter
//2) Update un state TodoList qui comprendra un tableau d'objet, chq objet sera un élément de la liste
//3) Afficher les éléments de mon tableau ToDolist
//4) Prévoir que chaque élément affiché puisse être supprimé (ptite corbeille)
//5) Prévoir que chaque élément affiché puisse être validé (ptite checkbox)

function App() {
  // je crée un state qui accueillera mes éléments en todo dans un tableau
  const [toDoList, setToDoList] = useState([]);

  //Je crée une fonction addToDo qui sera appelée lors de l'ajout d'un élément en argument du composant AddToDo
  //Elle prendra donc content en argument car c'est l'élément clé de la fonction
  const addToDo = (content) => {
    // je crée une variable todo qui est un objet avec clés id et content
    const newTodo = { id: crypto.randomUUID(), content };
    //je l'ajoute en dernier élément de mon tableau
    setToDoList([...toDoList, newTodo]);
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} deleteToDo={deleteToDo} />
      <AddToDo addToDo={addToDo} />
    </div>
  );
}

export default App;
