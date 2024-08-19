import React from "react";

const TodoForm = ({text, handleInput, handleSubmit}) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
