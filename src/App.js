import React from "react";
import './Styles/App.scss';
import * as math from "mathjs";
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      allInput: "",
      operationKeyPressed: "yes",
      calculateKeyPressed: "no",
      easterMsgCount: 0
    };
  }
  
  // Set a value of input
  addToInput = val => {
    if (this.state.input.length <= 15) {
      if (this.state.input === "0" && val !== ".") {
        this.setState({ input: val });   
      } else if (this.state.calculateKeyPressed === "yes") {      
        this.setState({ input: val });
        this.setState({ calculateKeyPressed: "no" });
      } else {
        this.setState({ input: this.state.input + val });
      }
      this.setState({ easterMsgCount: 0 });
      this.setState({ operationKeyPressed: "no" });
    }
  };

  // Delete last sign from input
  delInput = () => {
    this.setState({input: this.state.input.slice(0, -1)}, () => {
      if (this.state.input === "" || this.state.input === "-") {
        this.setState({input: "0"});
      }
    });
  };

  // Change a sign of input's value
  changeSign = () => {
    this.setState({ input: (parseFloat(this.state.input) * (-1)).toString() });
  };

  // Add operations to allInput
  mathOperation = (val) => {
    if (this.state.operationKeyPressed === "no") {
      this.setState({ operationKeyPressed: "yes" });
      this.setState({ easterMsgCount: 0 });
      this.setState({ allInput: this.state.allInput + this.state.input + val});
      this.setState({ input: "0" });
    }
  };

  // Calculate the result
  calcResult = () => {
    this.setState({ easterMsgCount: this.state.easterMsgCount + 1 });
    if (this.state.easterMsgCount === 4) {
      alert(String.fromCharCode(67,114,101,97,116,101,100,32,98,121,32,66,97,114,116,111,115,122,32,66,105,97,322,97,99,104));
      this.setState({ easterMsgCount: 0 });
    } else {
      if (this.state.operationKeyPressed === "no") {
        if ((this.state.allInput + this.state.input).includes("/0")) {
          alert("Nie dziel przez 0!")
          this.setState({ input: "0", allInput: "" });
        } else {
        this.setState({ input: (math.round(math.evaluate(this.state.allInput + this.state.input), 10)).toString() });
        this.setState({ allInput: "" });
        }
        this.setState({ calculateKeyPressed: "yes" });
      }
    }
  };

  // Display input history
  displayAllInput = () => {
    if (this.state.allInput.length > 23) {
      return "..." + this.state.allInput.slice(-23);
    } else {
      return this.state.allInput;
    }
  }

  // Fit text inside input field
  componentDidUpdate() {
    let test = document.getElementById("inputField");
    test.style.fontSize = "160px";
    let width = test.getBoundingClientRect().width;

    while (width > 250) {
      test.style.fontSize = (parseInt(test.style.fontSize) - 1) + "px";
      width = test.getBoundingClientRect().width;
    }
  }

  // Input from keyboard
  handleKeyPress = (event) => {
    if (("1234567890.").includes(event.key)) {
      this.addToInput(event.key);
    } 
    if (("/*-+").includes(event.key)) {
      this.mathOperation(event.key);
    }
    if (event.keyCode === 13) {
      this.calcResult();
    }
    if (event.keyCode === 8) {
      this.delInput();
    }
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  };

  render() {
    return (    
      <div className="Calc" onKeyPress={this.handleKeyPress}>
        <div className="Calc-header">
          {/* Drawing calc UI */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1242 2208" className="Calc-UI">
            <g id="Artboard_1" data-name="Artboard 1">
              <g>
                <rect className="cls-1" width="1242" height="2208"/>
                <rect className="cls-2" x="931" y="658" width="311" height="1550"/>
                <rect className="cls-3" y="348" width="1242" height="310"/>
                <rect id="Rectangle_3_copy" data-name="Rectangle 3 copy" className="cls-4" width="1242" height="348"/>
                <text id="inputField" textAnchor="end" className="cls-5 disable-select" x="1142.826" y="567.032">{this.state.input}</text>
                <text id="allInputField" textAnchor="end" className="cls-6 disable-select" x="1132" y="211.031">{this.displayAllInput()}</text>
                <g className="cls-7">
                  <text id="_1" data-name="1" className="cls-8" x="133.116" y="1159.703">1</text>
                  <text id="C" className="cls-8" x="114.116" y="849.702">C</text>
                  <text id="_4" data-name="4" className="cls-8" x="124.116" y="1469.702">4</text>
                  <text id="_7" data-name="7" className="cls-8" x="128.116" y="1779.703">7</text>
                  <text id="_0" data-name="0" className="cls-8" x="125.117" y="2089.704">0</text>
                </g>
                <g className="cls-7">
                  <text id="_-" data-name="+/-" className="cls-8" x="390.965" y="849.797">+/-</text>
                  <text id="_2" data-name="2" className="cls-8" x="436.116" y="1159.703">2</text>
                  <text id="_5" data-name="5" className="cls-8" x="435.116" y="1468.704">5</text>
                  <text id="_8" data-name="8" className="cls-8" x="437.116" y="1779.703">8</text>
                  <text id="_" data-name="." className="cls-8" x="457.116" y="2090.702">.</text>
                </g>
                <g className="cls-7">
                  <text id="_2-2" data-name="%" className="cls-8" x="732.291" y="849.89">%</text>
                  <text id="_3" data-name="3" className="cls-8" x="748.116" y="1159.703">3</text>
                  <text id="_6" data-name="6" className="cls-8" x="745.116" y="1468.704">6</text>
                  <text id="DEL" className="cls-8" x="697.921" y="2082.157">DEL</text>
                  <text id="_9" data-name="9" className="cls-8" x="745.116" y="1779.703">9</text>
                </g>
                <g className="cls-7">
                  <text id="_3-2" data-name="÷" className="cls-10" x="1054.29" y="863.891">÷</text>
                  <text id="_4-2" data-name="×" className="cls-10" x="1054.116" y="1174.702">×</text>
                  <text id="_5-2" data-name="−" className="cls-10" x="1054.116" y="1484.703">−</text>
                  <text id="_6-2" data-name="=" className="cls-10" x="1053.92" y="2104.156">=</text>
                  <text id="_7-2" data-name="+" className="cls-10" x="1054.116" y="1793.704">+</text>
                </g>

                {/* input fields */}
                <rect onClick={() => this.setState({input: "0", allInput: ""})} className="f1" y="658" width="310" height="310"/>
                <rect onClick={() => this.addToInput("1")} className="f1" y="968" width="310" height="310"/>
                <rect onClick={() => this.addToInput("4")} className="f1" y="1278" width="310" height="310"/>
                <rect onClick={() => this.addToInput("7")} className="f1" y="1588" width="310" height="310"/>
                <rect onClick={() => this.addToInput("0")} className="f1" y="1898" width="310" height="310"/>
            
                <rect onClick={() => this.changeSign()} className="f1" y="658" x="310" width="311" height="310"/>
                <rect onClick={() => this.addToInput("2")} className="f1" y="968" x="310" width="311" height="310"/>
                <rect onClick={() => this.addToInput("5")} className="f1" y="1278" x="310" width="311" height="310"/>
                <rect onClick={() => this.addToInput("8")} className="f1" y="1588" x="310" width="311" height="310"/>
                <rect onClick={() => this.addToInput(".")} className="f1" y="1898" x="310" width="311" height="310"/>
            
                <rect onClick={() => this.mathOperation("%")} className="f1" y="658" x="621" width="310" height="310"/>
                <rect onClick={() => this.addToInput("3")} className="f1" y="968" x="621" width="310" height="310"/>
                <rect onClick={() => this.addToInput("6")} className="f1" y="1278" x="621" width="310" height="310"/>
                <rect onClick={() => this.addToInput("9")} className="f1" y="1588" x="621" width="310" height="310"/>
                <rect onClick={() => this.delInput()} className="f1" y="1898" x="621" width="310" height="310"/>
            
                <rect onClick={() => this.mathOperation("/")} className="f2" y="658" x="931" width="311" height="310"/>
                <rect onClick={() => this.mathOperation("*")} className="f2" y="968" x="931" width="311" height="310"/>
                <rect onClick={() => this.mathOperation("-")} className="f2" y="1278" x="931" width="311" height="310"/>
                <rect onClick={() => this.mathOperation("+")} className="f2" y="1588" x="931" width="311" height="310"/>
                <rect onClick={() => this.calcResult()} className="f2" y="1898" x="931" width="311" height="310"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  input: PropTypes.string,
  allInput: PropTypes.string,
  operationKeyPressed: PropTypes.string,
  easterMsgCount: PropTypes.number
}

export default App;
