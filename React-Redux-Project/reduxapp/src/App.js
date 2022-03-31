import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./Components/AddTask";
import ListTask from "./Components/ListTask";

function App() {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList)
    const addTask = (newTask)=>{
        setTaskList([...taskList,newTask])
    }

    return (
        <Router>
            <div className="App">
                <div className="Content">
                    <Main />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <div>
                                    <AddToDo {...props} taskList={taskList} addTask={addTask}/>
                                </div>
                            )}
                        />
                        <Route
                            path="/List"
                            render={(props) => (
                                    <ListTask {...props} taskList={taskList} />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
