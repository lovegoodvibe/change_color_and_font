import React, {Component} from "react";

class SizeSetting extends Component {

    changeSize = (value) => {
        this.props.onChangheSize(value);
    }

    render() {

        return (
            <div
                style={{width: 500, height: 150, border: 5, borderStyle: "solid", borderColor: "black", float: "left"}}>
                <h1 style={{backgroundColor: "lightgrey", textAlign: "center"}}>Size : {this.props.fontSize} px</h1>
                <button onClick={() => {
                    this.changeSize(-2)
                }} style={{marginLeft: "40%"}}>Giảm
                </button>&nbsp;
                <button onClick={() => {
                    this.changeSize(2)
                }} style={{textAlign: "center"}}>Tăng
                </button>
            </div>

        );
    }
}

export default SizeSetting;