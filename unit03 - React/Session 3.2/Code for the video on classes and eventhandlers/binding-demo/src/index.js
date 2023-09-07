class Counter {
  constructor() {
    this.count = 0;
  }

  up() {
    this.count += 1;
    console.log("new value:", this.count);
  }
}
window.Counter = Counter;

// import React from "react";
// import ReactDOM from "react-dom";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }
//   }
//   up() {
//     this.setState(state => ({
//       count: this.state.count + 1
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>counter = {this.state.count}</h1>
//         <button onClick={this.up.bind(this)}> Up </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById("root"));