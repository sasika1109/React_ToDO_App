import React, {Component} from "react";
import './TodoMainTitle.css'
//import {colors} from "@material-ui/core";


export class TodoMainTitle extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="TodoTitle">
                            <h1 style={{color: 'blue'}}>TODO APP</h1>
                            <p>
                                This is general-purpose, web-based application, which can be used for
                                simple “honey do” home lists or to manage complex multi-user projects
                                for business. In addition to tracking the status of tasks
                                <h5>Created By Sasika Sampath Jayasundara</h5>
                                <h5>IT17172660</h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TodoMainTitle