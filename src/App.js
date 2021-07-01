import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/Result';
import Calculator from './components/calc';
// import KeyPadComponent from "./components/Calculator";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

      if(button === 'x'){
        button = '*'
      }
        if(button === '='){
            this.calculate()
        }
        else if(button === "AC"){
          this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "0" ) + ""
            })
        } catch (error) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>React Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    {/* <KeyPadComponent onClick={this.onClick}/> */}
                    <Calculator onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
