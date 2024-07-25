function TodoForms({
  todoEntered,
  changeTodoEntered,
  setStatusEntered,
  addtodo,
}) {
  return (
    <>
      <input
        type="text"
        name="todoitem"
        value={todoEntered}
        onChange={changeTodoEntered}
      />
      <select
        onChange={function (e) {
          setStatusEntered(e.target.value);
        }}
      >
        <option value="completed">Completed</option>
        <option value="incomple">Not Completed</option>
      </select>
      <button onClick={addtodo}>add todo</button>
    </>
  );
}
export default TodoForms;
