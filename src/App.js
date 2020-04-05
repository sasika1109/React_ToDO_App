import React from 'react';
import TodoMainTitle from "./components/TodoMainTitle"
import TodoItemForm from "./components/TodoItemForm";
import './App.css';


function App() {
    return (
        <div className="App">
            <div className={"box"}>
                <header className="App-header">
                    <div className="container" id={"back"}>
                        <div className="row">
                            <div className="col">
                                <TodoMainTitle/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TodoItemForm/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
