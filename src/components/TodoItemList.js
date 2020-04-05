import React from "react";
import "./TodoItemList.css";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "./Modal";

function TodoItemList(props) {
    const items = props.items;
    const completes = props.completes;

    //displaying list
    const listItems = items.map((item, i) => {
        return (

            <div className="list" key={item.key}>
                <input type={"hidden"} value={i + 1}/>
                <p>
                    <input type="text" class="form-control-sm" id={i} style={{
                        /* textDecoration: props.completed[i]
                             ? "line-through"
                             : ""*/
                    }} value={item.text}
                           onChange={
                               (e) => {
                                   props.setUpdate(e.target.value, item.key)
                               }
                           }/>
                    <span>

                <input type="checkbox" className="check" id={"chk"} onChange={() =>
                    props.handleCheck([i])}/>{"  "}
                        <EditIcon className="edit " data-toggle="modal" data-target="#exampleModal"
                                  onClick={() =>
                                      props.replaceModalItem(item.key)
                                  }/>

                <DeleteIcon className="delete" onClick={() =>
                    props.deleteItem(item.key)
                }/>
            </span>

                </p>

            </div>
        )
    })

    //displaying completed list
    const complted = completes.map((complete, i) => {

        return (

            <div className="list" key={items.key}>
                <input type={"hidden"} value={i + 1}/>
                <p>
                    <del>{complete.text}</del>
                    <span>


                <DeleteIcon className="delete" onClick={() =>
                    props.deleteComItem(i)
                }/>
            </span>

                </p>

            </div>
        )
    })

    return (

        <div>
            <div>{listItems}</div>
            <div>{complted}</div>
            <Modal
                items={props.items}
                saveModalDetails={props.saveDetals}
            />

        </div>

    )


}

export default TodoItemList