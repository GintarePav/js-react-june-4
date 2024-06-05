const TaskSearch = (props) => {
    return (
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={props.onSearch}
        value={props.value}
        style={{ marginBottom: "10px" }}
      />
    );
  };
  
  export default TaskSearch;