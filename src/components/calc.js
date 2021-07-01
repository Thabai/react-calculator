import React, {Component} from "react";
import '../App.css';

class Calculator extends Component {
    // onClick=button=> {
    //     console.log(button);  
    // };
    
    render() {
        const buttons= ['(',')','%','AC',7,8,9,'/',4,5,6,'x',1,2,3,'-',0,'.','=','+'];
        return (
            <div className="button">
            {buttons.map((button,index) => {
                return <Button key={index} name={button} onClick={() => this.props.onClick(button)} />;        
            })}
        </div>     
        );  
    }
}

const Button = props => {
    return <button onClick={props.onClick}>{props.name}</button>;
};

export default Calculator;

// click={() =>this.clickHandler(button)}