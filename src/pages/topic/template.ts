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

export default CounterComponent;`
  } 
  case "hoc": {
    return {
      template: `
import React, { Component } from 'react';

const withMousePosition = (WrappedComponent) => {
  return class extends Component {
    state = {
      mousePosition: { x: 0, y: 0 }
    };

    componentDidMount() {
      document.addEventListener('mouseover', this.handleMouseTrack);
    }

    componentWillUnmount() {
      document.removeEventListener('mouseover', this.handleMouseTrack);
    }

    handleMouseTrack = (e) => {
      this.setState({
        mousePosition: {
          y: e.clientY,
          x: e.clientX,
        },
      });
    };

    render() {
      return <WrappedComponent {...this.props} mousePosition={this.state.mousePosition} />;
    }
  };
};

class MouseTrack extends Component {
  render() {
    const { mousePosition } = this.props;

    if (!mousePosition) {
      return <div>No hay posición</div>;
    }

    return (
      <div>
        {mousePosition.x} - {mousePosition.y}
      </div>
    );
  }
}
const EnhancedMouseTrack = withMousePosition(MouseTrack);

class SecondMouseTrack extends Component {
  render() {
    const { mousePosition } = this.props;

    if (!mousePosition) {
      return <div>No hay posición</div>;
    }

    return (
      <div>
        <p>Position X: {mousePosition.x}</p>
        <p>Position Y: {mousePosition.y}</p>
      </div>
    );
  }
}
const EnhancedSecondMouseTrack = withMousePosition(SecondMouseTrack);

export class HOComponent extends Component {
  render() {
    return (
      <div style={styles}>
        <EnhancedMouseTrack />
        <EnhancedSecondMouseTrack />
      </div>
    );
  }
}

const styles = {
  border: '1px solid red',
  width: '300px',
  height: '300px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',
};

      `
    }
  }
  case "comp": {
    return {
      template: `
// Componente hijo
class Button extends React.Component {
  render() {
    const { onClick, children } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}

// Componente padre
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('El botón fue clickeado');
    alert("Haz hecho click");
  }

  render() {
    return (
      <div>
        <h1>Aplicación de Composición en React</h1>
        <Button onClick={this.handleClick}>Haz clic aquí</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
      `
    }
  }
  default:
    return {
      template: "// (Editor 1.) Empieza tu código aquí!"
    }
  }
}