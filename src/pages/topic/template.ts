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

  case "lazy": {
    return {
      template: `
// En lugar de importar así:
import MyComponent from "./pages/MyComponent";
//importamos así:
const MyComponent = React.lazy(() => import('./pages/MyComponent'));
/* CON ESTE MÉTODO, NOS ASEGURAMOS QUE EL CÓDIGO SE FORME 
  POR MEDIO DE VARIOS CHUNKS DE JS QUE SE VAYAN CARGANDO 
  AL BROWSER A MEDIDA QUE SE REQUIERAN MEJORANDO 
  LA EXPERIENCIA DEL USUARIO Y OPTIMIZANDO EL PERFORMANCE */
`
    }
  }

  case "suspense": {
    return {
      template: `
import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./pages/MyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        //La prop Fallback permite cargar un componente (LOADER) 
        //mientras el browser resuelve el Chunk que se va a inyectar.
        <MyComponent />
      </Suspense>
    </div>
  );
};

      `
    }
  }

  case "react-router-one": {
    return {
      template: `
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Suspense>
  );
};

      `
    }
  }

  case "react-router-two": {
    return {
      template: `
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const pagesCollection = [
  { id: 1, Component: Home, path: "/" },
  { id: 2, Component: About, path: "/about" },
  { id: 3, Component: Contact, path: "/contact" },
]

const App = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        {
          pagesCollection.map(({ id, Component, path }) => (
            <Route key={id} path={path} element={<Component/>} />
          ))
        }
      </Routes>
    </Suspense>
  );
};
      `
    }
  }

  case "react-router-three": {
    return {
      template: `
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyExoticComponent, lazy } from "react";

const routesMap = [
  { route: "/", name: "Welcome"}, 
  { route: "/temario", name: "Topics"},
  { route: "/temario/:topic", name: "Topic"},
];


const dynamicImporting = (param: string): LazyExoticComponent<() => JSX.Element> => {
  return lazy(() => import('@pages/param.name/page.tsx'));
};

const pagesCollection = routesMap.map(
  (comp, idx) => ({ 
    id: idx, 
    route: comp.route, 
    Component: dynamicImporting(comp.name)}
  )
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map(({ id, route, Component }: pagesCollectionProps) => (
            <Route key={id} path={route} element={<Component />}  />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
      `
    }
  }

  case "styled-components-basic": {
    return {
      template: `
//Opción A:
const Button = styled.button'
  background-color: #f1f1f1;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
';
//NO OLVIDES UTILIZAR BACKTICKS EN LUGAR DE COMILLAS.

//Opción B:
const Button = styled("button")'
  background-color: #f1f1f1;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
';
//NO OLVIDES UTILIZAR BACKTICKS EN LUGAR DE COMILLAS.

//Opción C: Extendiendo a otro componente.
import { BiArrowBack } from 'react-icons/bi'
const Button = styled(BiArrowBack)'
  background-color: #f1f1f1;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
';
//NO OLVIDES UTILIZAR BACKTICKS EN LUGAR DE COMILLAS.
      `
    }
  }

  case "styled-components-props": {
    return {
      template: `
import styled from 'styled-components';

const CustomButton = styled('button')'
  background-color: $ {props => props.color}
'

const App = () => {
  return (
    <div>
      {
        sucess && (<CustomButton color="green" />)
      }
      {
        error && (<CustomButton color="crimson" />)
      }
    </div>
  )
}
      `
    }
  }

  case "old-styled-components-css": {
    return {
      template: `
import styled, { css } from "styled-components";

const CustomDivasOld = styled("div")'
  background: red;
  color: #fff;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  /*Estos serán los estilos default*/
  $ {props => props.success && css' /*Esta es la condición que evalúa la prop success*/
    background: white;
    color: green;
    border: 1px solid green;
    padding: 5px;
    border-radius: 15px;
    /*Estos serán los estilos customizados*/
  '}
'
      `
    }
  }

  case "new-styled-components-css": {
    return {
      template: `
import styled, { css } from "styled-components";

const CustomThemeDiv = styled.div'
  $ {(props) => {
    switch (props.$mode){
      case "dark":
        return css'
          background-color: black;
          color: white;
          padding: 20px;
        '
      default: 
        return css'
          background-color: white;
          color: black;
          border: 1px solid black;
          padding: 20px;
        '
    }
  }}
'

export default function App() {
  return (
    <div>
      <CustomThemeDiv>
        <h1>Hello Guys!</h1>
        <p>Start coding to see some magic happen :)</p>
      </CustomThemeDiv>
      <CustomThemeDiv $mode="dark">
        <h1>Hello StackBlitz!</h1>
        <p>Start coding to see some magic happen :)</p>
      </CustomThemeDiv>
    </div>
  );
}
      `
    }
  }

  case "one":
    return {
      template: "// (Editor 1.) Empieza tu código aquí!"
    }
  case "two": 
  return {
      template: "// (Editor 2.) Empieza tu código aquí!"
    }
  default:
    return {
      template: "// (Editor 1.) Empieza tu código aquí!"
    }
  }
}