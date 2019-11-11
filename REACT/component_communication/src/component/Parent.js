import React, {Component} from "react";
import Child from "./Child";
import "../App.css"

export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "REACT 101"
        }
    }
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        })
    }

    render() {
        return(
            <div className="App">
                <h1>PARENT:</h1>
                <p>{this.state.title}</p>
                <h3> grand parents props: {this.props.name}</h3>
                {/* pass the event as a prop to the child */}
                <Child changeParentTitle={this.changeTitle} title={this.state.title} {...this.props}/>
                <Child changeParentTitle={this.changeTitle} title={this.state.title} {...this.props} />
            </div>
        )
    }
}