import { Component } from "react";
import "../Components/Main.css";

export default class Main extends Component {
  state = {
    display: false,
    number: [1, 2, 3, 4, 5, 6],
    extra: "",
  };



  handleReset = () => {
    console.log("Reset");
    this.setState({
        display: false
    });
  };

  generator = () => {
    console.log("Testing");
    const number = this.state.number.map(
      (item) => (item = Math.floor(Math.random() * 49) + 1)
    );
    const extra = Math.floor(Math.random() * 10) + 1;
    this.setState({
      display: true,
      number,
      extra,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Lotto 6/49</h1>
        <p>Generating random numbers</p>
        {/* {this.state.display ? <div>{this.state.number.map(item => <div><p>{item}</p></div>)}
        
        
        </div>
        }  */}

        {this.state.display ? (
          <div className="main">
            {this.state.number.map((num) => (
              <div className="inline">
                <p>{num}</p>
              </div>
            ))}
            <div className="nn">
              <p>{this.state.extra}</p>
            </div>
          </div>
        ) : null}

        <div className="buttons">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.generator}>Show me the lucky numbers</button>
        </div>
      </div>
    );
  }
}
