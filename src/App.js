import React, {Component} from "react";
import ColorPick from "./Components/ColorPick";
import SizeSetting from "./Components/SizeSetting";
import Reset from "./Components/Reset";
import Result from "./Components/Result";
import {Button, Icon, Grid, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            fontSize: 16
        }
    }


    onSetColor = (params) => {
        this.setState({
            color: params
        })
    }
    onChangeSize = (value) => {
        const {fontSize} = this.state;
        if (fontSize + value >= 8 && fontSize + value <= 36) {
            this.setState({
                fontSize: fontSize + value
            });
        }
    }

    onSettingReset = () => {
        this.setState({
            color: "red",
            fontSize: 16
        });
    }

    render() {
        const {color, fontSize} = this.state;
        return (
            <div>
                <div style={{width: 800, height: 160}}>
                    <ColorPick
                        color={color}
                        onRecieveColor={this.onSetColor}/>
                    <SizeSetting fontSize={fontSize}
                                 onChangheSize={this.onChangeSize}
                    ></SizeSetting>
                </div>
                <Reset onSettingReset={this.onSettingReset}></Reset>
                <Result color={color}
                        fontSize={fontSize}
                ></Result>

            </div>
        );
    }
}

export default App;
