import { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Dans handleClick, je veux passer la valeur de mon input en argument de ma fonction addToDo, puis remettre l'input à zéro
  const handleClick = () => {
    if (inputValue) {
      addToDo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (inputValue && e.key === "Enter") {
      addToDo(inputValue);
      setInputValue("");
    }
  };

  return (
    <section className="addtodo">
      <input
        value={inputValue}
        type="text"
        placeholder="New task"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
    </section>
  );
};

export default AddToDo;
