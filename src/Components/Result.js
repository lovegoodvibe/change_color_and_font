import React,{Component} from "react";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    setStyle(){
        return({
            color:this.props.color,
            border:5, borderStyle:"solid",
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        })


    }
    render() {

        return (

            <div style={{width:800,height:200,border:5, borderStyle:"solid",  borderColor: "black"}}>
                <h3>Color : {this.props.color} - Fontsize : {this.props.fontSize} px</h3>
                <p style={this.setStyle()}>Nội dung setting</p>
            </div>

        );
    }
}
export default Result;