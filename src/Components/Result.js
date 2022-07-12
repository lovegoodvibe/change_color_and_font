import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css';
import {Button} from "semantic-ui-react";

class Result extends Component {
    setStyle() {
        const {color, fontSize} = this.props;
        return ({
            color: color,
            border: 5, borderStyle: "solid",
            borderColor: color,
            fontSize: fontSize
        })


    }

    render() {
        const {fontSize} = this.props;
        return (
            <div className="result">
                <h3>Color : {this.props.color} - Fontsize : {fontSize} px</h3>
                <p className="noi_dung">Nội dung setting</p>
                <Button color={"red"}>aaaa</Button>
            </div>

        );
    }
}

export default Result;