import React, {Component} from "react";

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput: ''
        }
    }
    render() {
        return(
            <div>
                <h1> CHILD </h1>
                <p>{this.props.title}</p>
                <input onChange={(event) => {
                    this.setState({
                        userInput: event.target.value
                    })
                }}/>
                <button onClick={() => this.props.changeGrandParentName(this.state.userInput)}> Change Parent Title</button>
                <button onClick={() => this.props.changeGrandParentName(this.state.userInput)}> Change Grand Parent Title</button>
                <p> Grand parent's name: {this.props.name}</p>
            </div>
        )
    }
}