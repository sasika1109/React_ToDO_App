import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            requiredItem: 0,
            items : [],
            completed: {
                0: true,
                1: false,
            },
            currentItem:{
                text:'',
                key : ''
            }
        }
    }


/*
    componentWillReceiveProps(nextProps) {
        this.setState({
            currentItem:{
                text:  nextProps.title,
                key: Date.now()
            }
        });
    }
*/
    titleHandler(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    handleSave() {
        const newItem = this.state.currentItem.text;
        this.props.saveModalDetails(newItem )
    }
    /*saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        console.log(requiredItem)
        let tempbrochure = this.state.items;
        console.log(tempbrochure)
        tempbrochure[requiredItem] = item;
        this.setState({ items: item });
    }*/


    render() {

      //  const requiredItem = this.state.requiredItem;
     //   let modalData = this.state.items[requiredItem];
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable"></span><input  id={this.state.currentItem.key} value={this.state.currentItem.text} onChange={(e) => this.titleHandler(e)} /></p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;