import React, {Component} from "react";
import './TodoItemForm.css'
import TodoItemList from "./TodoItemList";


export class TodoItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredItem: 0,
            items: [],
            completes: [],
            /* completed: {
                // 0 : false,
                // 1 : true
             },*/
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.deleteComItem = this.deleteComItem.bind(this);

    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    //Adding item for the list
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;

        if (newItem.text !== "") {

            const item = this.state.items;
            item.unshift(newItem)
            this.setState({
                items: item,
                currentItem: {
                    text: '',
                    key: Date.now()
                }
            })
        }
    }

    //Removing item from the list
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

    //Selecting Completed item
    handleCheck(i) {

        const newitems = this.state.items;
        let data = this.state.items[i];
        let datas = this.state.items;
        let completes = this.state.completes;
        completes.push(data);

        datas.splice(i, 1)
        this.setState(state => ({
            //   completed: { ...state.completed, [i]: !state.completed[i] },
            datas: datas
        }));

    }

    //Deleting completed item

    deleteComItem(i) {

        let completes = this.state.completes;
        completes.splice(i, 1);
        this.setState({
            completes: completes
        });
    }

//Editing item using modal
    replaceModalItem(index) {
        this.setState({
            requiredItem: index
        });
    }

    //editing with modal
    saveModalDetails(itemM) {
        const newitems = this.state.items;
        newitems.map(item => {
            const requiredItem = this.state.requiredItem;
            if (item.key === requiredItem) {
                item.text = itemM;
            }
        })
        this.setState({
            items: newitems
        })
    }

    //editing item from input field
    setUpdate(text, key) {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }


    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.addItem}>
                            <div className="form-group">
                                <h2>Add Item</h2>
                                <input type="text" className="form-control"
                                       value={this.state.currentItem.text}
                                       onChange={this.handleInput}/>

                            </div>
                            <button type="button" className="btn btn-primary" type="submit">Submit</button>
                        </form>

                    </div>
                    <div className={"col"}>
                        <div className={"todoList"}>
                            <h2>Todo List</h2>
                            <TodoItemList
                                items={this.state.items}
                                required={this.state.requiredItem}
                                completed={this.state.completed}
                                completes={this.state.completes}
                                deleteItem={this.deleteItem}
                                deleteComItem={this.deleteComItem}
                                setUpdate={this.setUpdate}
                                handleCheck={this.handleCheck}
                                replaceModalItem={this.replaceModalItem}
                                saveDetals={this.saveModalDetails}/>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default TodoItemForm