import React, { useState,useEffect } from "react";
import "./App.css";
const Login = () => {
  const [mytodo_list, setMyTodoList] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  

  const createTask = () => {
    if (taskInput.trim() === "" || selectedDate === "") {
      alert("Please enter a task and select a date");
    } else {
      setMyTodoList([
        ...mytodo_list,
        { task: taskInput.trim(), date: selectedDate },
      ]);
      setTaskInput("");
      setSelectedDate("");
    }
  };

  const deleteTask = (index) => {
    const updatedList = mytodo_list.filter((_, i) => i !== index);
    setMyTodoList(updatedList);
  };

  const updateTask = (index) => {
    const updatedTask = prompt("Update task:", mytodo_list[index].task);
    if (updatedTask !== null) {
      const updatedList = [...mytodo_list];
      updatedList[index].task = updatedTask.trim();
      setMyTodoList(updatedList);
    }
  };
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };
  // const themeClass = isDarkTheme ? "dark-theme" : "light-theme";
  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <>
      <section className="mytodo-container">
        <div className="mytodo-list">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="New Task"
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button
              type="button"
              onClick={createTask}
              className="yellow-button"
            >
              Create Task
            </button>
            <div></div>
          </form>

          <p id="counter">{mytodo_list.length} Tasks</p>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="mytodo-tasks">
              {mytodo_list.map((taskObj, index) => (
                <tr key={index}>
                  <td>{taskObj.task}</td>
                  <td>{taskObj.date}</td>
                  <td>
                    <button
                      className="green-button"
                      onClick={() => updateTask(index)}
                    >
                      Update
                    </button>
                    <button
                      className="red-button"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className={`theme-switch ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </>
  );
};

export default Login;
