import { Component } from "react";
import Parent from "./Parent";
import "../App.css";

export default class PersonalInfo extends Component {
    constructor(props)
    {
        super(props);
    }

        render(){
        return(
            <Parent title="Personal Information">
                <div>
                    <input className="input" 
                    type="text" 
                    onChange={(e) => this.props.handleInput(e)} 
                    placeholder="First Name" name="firstName" id="firstName"></input>
                </div>

                <div>
                    <input className="input" type="text" 
                    onChange={(e) => this.props.handleInput(e)} 
                    placeholder="Last Name" name="lastName" id="lastName"></input>
                </div>

                <div>
                    <input className="input" type="text" 
                     onChange={(e) => this.props.handleInput(e)} 
                    placeholder="Title" name="rtitle" id="rtitle"></input>
                </div>

                <div>
                    <input className="input" type="text" placeholder="Address" 
                    onChange={(e) => this.props.handleInput(e)} 
                    name="addr" id="addr"></input>
                </div>
                
                <div>
                    <input className="input" type="tel" placeholder="Phone Number"
                     onChange={(e) => this.props.handleInput(e)}  
                    name="phone" id="phone"></input>
                </div>

                <div>
                    <input className="input" type="text" 
                     onChange={(e) => this.props.handleInput(e)} 
                    placeholder="Email" name="email" id="email"></input>
                </div>

                <div>
                    <textarea className="input" placeholder="Bio" 
                     onChange={(e) => this.props.handleInput(e)}     
                    name="bio" id="bio"></textarea>
                </div>
            </Parent>
        );
    }
}