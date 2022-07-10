import React,{Component} from "react";
class SizeSetting extends Component {

    changeSize=(value)=> {
        this.props.onChangheSize(value);
    }
    render() {

        return (
            <div style={{width:500,height:150,border:5, borderStyle:"solid",  borderColor: "black", float:"left"}}>
                <h1 style={{backgroundColor:"lightgrey"}}>Size : {this.props.fontSize} px</h1>
                <button onClick={()=>{this.changeSize(-2)}} style={{float:"left"} }>Giảm</button>
                <button onClick={()=>{this.changeSize(2)}} style={{float:"left"}}>Tăng</button>
            </div>

        );
    }
}
export default SizeSetting;