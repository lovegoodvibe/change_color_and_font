import React,{Component} from "react";

class Reset extends Component {
    render() {

        return (
            <div  style={{width:800,height:30}}>
                <button style={{width:50,height:25,backgroundColor:"green",float:"left"}}
                        onClick={this.props.onSettingReset}
                >Reset</button>
            </div>


        );
    }
}
export default Reset;