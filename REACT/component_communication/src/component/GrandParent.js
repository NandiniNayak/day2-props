import React, {Component} from "react";
import Parent from './Parent';
import "../App.css"

export default class GrandParent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "BOB ROSS"
        }
    }
    changeTitle = (newTitle) => {
        this.setState({
            name: newTitle
        })
    }

    render(){
        return(
            <div className="App">
                <h2>Grand Parent: {this.state.name}</h2>
                <Parent changeGrandParentName={this.changeTitle} name={this.state.name} />
            </div>
        )
    }

}