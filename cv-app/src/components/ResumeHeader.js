import { Component } from "react";

export default class ResumeHeader extends Component{

    constructor(props)
    {
        super(props);
    }

    render(){
        return(
        <div>
            <div className="rHeader">
                <h2>
                    {this.props.data.firstName} 
                </h2>
                <h2>
                    {this.props.data.lastName}
                </h2>
            </div>
            <div className='rtitle'>{this.props.data.rtitle}</div>
            <div className="rDetails">
              <div className=''>{this.props.data.addr}</div>
              <div className=''>{this.props.data.phone}</div>
              <div className=''>{this.props.data.email}</div>
            </div>
            <hr></hr>
        </div>
        )
    }
}