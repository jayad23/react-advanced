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
  case "ptrl": {
    return {
      template: `
import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('modal-root')
    );
  }
}

// Uso del componente Modal
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Aplicación de Ejemplo</h1>
        <Modal>
          <p>Contenido del modal</p>
        </Modal>
      </div>
    );
  }
}
      `
    }
  }
  case "incrustados": {
    return {
      template: `
import React from 'react';
import ReactDOM from 'react-dom';

class VideoPlayer extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <video src="video.mp4" controls />
      </div>,
      document.getElementById('video-player')
    );
  }
}

// Uso del componente VideoPlayer
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Aplicación de Ejemplo</h1>
        <div id="video-player"></div>
      </div>
    );
  }
}
      `
    }
  }
  case "cc": {
    return {
      template: `
// Container Component
const UserContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Lógica para obtener los usuarios desde una API
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </div>
  );
}

// Presentational Component
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Uso del componente UserContainer
const App = () => {
  return (
    <div>
      <UserContainer />
    </div>
  );
}
      `
    }
  }
  case "render-props": {
    return {
      template: `
import React, { useState, useEffect } from 'react';
const rickApi = 'https://rickandmortyapi.com/api/character';
const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/1/';

const GenericComponent = ({ name, image }) => {
  if (!name || !image) {
    return <div>No hay position</div>;
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Avatar: </p>
      <img alt={name} width="100px" src={image} />
    </div>
  );
};

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((jsoned) => {
          setData(jsoned);
        })
        .catch((err) => console.error(err));
    }
  }, [url]);

  return render(data);
};

export const RenderPropsModel = () => {
  return (
    <div style={styles}>
      <DataFetcher
        url={rickApi}
        render={(data) => (
          <GenericComponent
            image={data?.results[0].image}
            name={data?.results[0].name}
          />
        )}
      />
      <DataFetcher
        url={pokemonApi}
        render={(data) => (
          <GenericComponent
            image={data?.sprites.other.dream_world.front_default}
            name={data?.species.name}
          />
        )}
      />
    </div>
  );
};

const styles = {
  border: '1px solid red',
  width: '300px',
  height: 'auto',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '10px',
  paddingBottom: '10px',
};
      `
    }
  }
  case "controlled": {
    return {
      template: `
import React, { useState } from 'react';

const ControlledComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', value);
    // Lógica adicional aquí para manejar el valor del input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponent;
      `
    }
  }
  case "container-presentational": {
    return {
      template: `
import React, { useState } from 'react';

// Container Component
const UserContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Lógica para obtener los usuarios desde una API
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </div>
  );
}

// Presentational Component
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Uso del componente UserContainer
const App = () => {
  return (
    <div>
      <UserContainer />
    </div>
  );
}

export default App;
      `
    }
  }
  default:
    return {
      template: "// (Editor 1.) Empieza tu código aquí!"
    }
  }
}