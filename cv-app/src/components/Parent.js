import { Component } from "react";
import "../App.css";

export default class Parent extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="component-container">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}