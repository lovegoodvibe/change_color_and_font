import React,{Component} from "react";
class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            colors : ["red","green","blue","#ccc"]
        }
    };
    showColor=(color)=>{
        if(color !== this.props.color){
            return { width:50,height:50,backgroundColor : color,border:5, borderStyle:"solid", borderColor: "white"}}
        else {
            return {width:50,height:50,backgroundColor : color,border:5, borderStyle:"solid", borderColor: "black"}}
    };
    setActiveColor= (color)=> {
        this.props.onRecieveColor(color);
    }
    render() {
        const elmColor = this.state.colors.map((color,) =>{
            return <th
                style={this.showColor(color) }
                onClick={()=>this.setActiveColor(color)}
            ></th>
        }) ;

        return (

            <div style={{width:200,height:150,border:5, borderStyle:"solid",  borderColor: "black", float:"left"}}>
                <h1 style={{textAlign:"center"}}>Color Pick</h1>
                <table>
                    <tr>
                        {elmColor}

                    </tr>
                </table></div>


        );
    }
}
export default App;