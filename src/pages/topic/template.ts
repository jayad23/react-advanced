export const templateGenerator = (param: string) => {
  switch (param) {
    case "example":
      return {
        template: "import React from 'react'"
      }
    case "class-component-example":
      return {
        template: `
import { Component } from 'react'
class ClassCounterCompoent extends Component{
  constructor(props){
    super(props);
    state = {
      counter: 1
    }
  }

  handleIncrement(){
    this.setState(prevState => ({ counter: prevState.counter + 1}));
  }

  render(){
    return (
      <div>
        <p>La cuenta es: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Incrementar</button>
      </div>
    )
  }
}
`
}
case "functional-component-example":
  return {
    template: `
import React, { useState } from 'react';

const FunctionalCounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default CounterComponent;

    `
  } 
    default:
      return {
        template: "// (Editor 1.) Empieza tu código aquí!"
      }
  }
}