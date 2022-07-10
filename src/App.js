import React,{Component} from "react";
import ColorPick from "./Components/ColorPick";
import SizeSetting from "./Components/SizeSetting";
import Reset from "./Components/Reset";
import Result from "./Components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        color:"red",
        fontSize:16
    }
  }
  onSetColor=(params) =>{
      this.setState({
          color:params
      })
  }
  onChangeSize=(value)=>{
      if(this.state.fontSize + value >=8 && this.state.fontSize + value <= 36){
          this.setState({
              fontSize : this.state.fontSize + value
          });
      }
  }

  onSettingReset =() =>{
      this.setState ( {
          color:"red",
          fontSize:16
      });
  }
  render() {
    return (
        <div>
          <div style={{width:800,height:160}}>
              <ColorPick
              color={this.state.color}
              onRecieveColor={this.onSetColor}/>
              <SizeSetting fontSize={this.state.fontSize}
                           onChangheSize={this.onChangeSize}
              ></SizeSetting>
          </div>
            <Reset onSettingReset={this.onSettingReset}></Reset>
            <Result color={this.state.color}
                    fontSize={this.state.fontSize}
            ></Result>
        </div>
    );
  }
}
export default App;
