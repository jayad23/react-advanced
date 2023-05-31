export const U4L1 = {
  title: "Definición", 
  development:[
    { 
      definition: `Styled Components es una biblioteca popular en el ecosistema de React que permite escribir estilos CSS de manera declarativa dentro de los componentes de React. Proporciona una forma elegante y poderosa de crear componentes estilizados con CSS en JavaScript.<br/>
    `, 
    image: "",
  }
  ]
};

export const U4L2 = {
  title: "Conceptos Básicos", 
  development:[
    { 
      definition: `
      <i><span className="red">INSTALACIÓN</span></i>:<br/>La instalación la podemos hacer con npm o con yarn. Yarn es un manejador de paquetes más rápido que npm; Por otro lado, actualmente se genera un <a href="https://stackoverflow.com/questions/76321733/i-am-trying-to-install-styed-components-but-not-working/76321789#76321789" target="_blank">error</a> cuando se instala con npm, así que procederemos con yarn.<br/>
      <code><span className="green">npm install styled-components</span></code> ó <code><span className="green">yarn add styled-components</span></code><br/>
      <br/>
      <i><span className="red">IMPORTACIÓN</span></i>:<br/><br/>
      <code><span className="purple">import { <span className="white">styled</span> } from <span className="green">"styled-components"</span>;</span></code><br/>
      <br/>
      <i><span className="red">DECLARACIÓN DE COMPONENTES</span></i>: <button className="code-btn styled-components-basic">Ver Ejemplo</button> <br/><br/>Para crear un componente estilizado, puedes utilizar la función <code><span className="white">'styled'</span></code> y pasarle el nombre de la etiqueta HTML o un componente existente como argumento. Luego, puedes escribir tus estilos CSS utilizando una sintaxis similar a la de CSS normal dentro de un template literal.<br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U4L3 = {
  title: "Propiedades dinámicas", 
  development:[
    { 
      definition: `
      <i><span className="red">PROPS</span></i>: <button className="code-btn styled-components-props">Ver Ejemplo</button> <br/><br/>Styled Components también te permite utilizar propiedades dinámicas en tus estilos. Puedes pasar propiedades al componente estilizado y utilizarlas en tus estilos CSS. Ten presente debuggear en consola cómo el browser interpreta esas props; en algunas ocasiones puede tomar como booleanos propiedades que espera que sean strings, y tendrás que hacer el re-ajuste.<br/>
      <br/>
      <i><span className="red">CSS</span></i>: <button className="code-btn styled-components-props">Ver Ejemplo</button> <br/><br/>css es también una función de styled-components que te permite evaluar una condición, y aplicar todo un grupo de estilos únicamente cuando la condición evalúe a true. De lo contrario, aplica por default todos los estilos que estén declarados por fuera de la función css.<br/>
      La <button className="code-btn old-styled-components-css">antigua implementación</button> es más propia de la libreía, mientras que la <button className="code-btn new-styled-components-css">nueva implementación</button> es más orientada a Javascript en general, sin descartar la función css-
      <br/>
      <a href="https://i.ibb.co/xF15T2G/Screenshot-2023-05-31-at-12-35-46.png" target="_blank"><img alt="props-styled-components" src="https://i.ibb.co/xF15T2G/Screenshot-2023-05-31-at-12-35-46.png" className="injected-img" /></a>
      <br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U4L4 = {
  title: "Type Safe", 
  development:[
    { 
      definition: `
      <code><span className="purple">Typescript</span></code> es una librería completamente integrable a <code><span className="pink">Styled Components</span></code>.<br/>
      La implementación de TS depende mucho de si se haya utilizado antes en cualquier proyecto de React, esto con el fin de entender cómo declarar <code><span className="green">interface</span></code>, <code><span className="green">type</span></code>, y tipos básicos.<br/>
      En principio es normal que nos encontremos con un error de los tipos de la librería que podrían no instalarce, y veríamos un error como el que se muestra en esta imagen:
      <a href="https://i.ibb.co/svTfMLg/Screenshot-2023-05-31-at-14-47-16.png" target="_blank"><img alt="props-styled-components" src="https://i.ibb.co/svTfMLg/Screenshot-2023-05-31-at-14-47-16.png" className="injected-img" /></a>
      <br/>
      En ese caso, podemos solucionarlo haciendo la instalación de los mismos con <br/> <code><span className="green">npm i @types/styled-components</span></code> ó <code><span className="green">yarn add @types/styled-components</span></code><br/>
      <br/>
      <span className="red">Opción 1:</span> siguiendo una declaración más actualizada con la última versión de Styled-components, declaramos la <code><span className="green">interface</span></code> con la construcción del objeto de <code><span className="white">variables/props</span></code> que estamos recibiendo. Esta interfaz luego de implementa en la función callback que nos retorna las props, tal como se muestra en la imagen de abajo:<br/>
      <a href="https://i.ibb.co/LzFVz19/Screenshot-2023-05-31-at-15-03-33.png" target="_blank"><img alt="props-styled-components" src="https://i.ibb.co/LzFVz19/Screenshot-2023-05-31-at-15-03-33.png" className="injected-img" /></a>
      <br/>
      <br/>
      <span className="red">Opción 2:</span> la declaración acorde a la versión anterior tal como se muestra en la imagen de abajo. Presta atención a la ubicación y declaración de las props, así como la sintaxis de la fn css:<br/>
      <a href="https://i.ibb.co/ynRQBFD/Screenshot-2023-05-31-at-16-14-19.png" target="_blank"><img alt="props-styled-components" src="https://i.ibb.co/ynRQBFD/Screenshot-2023-05-31-at-16-14-19.png" className="injected-img" /></a>
      <br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

// export const U4L5 = {
//   title: "Componentes controlados y no controlados", 
//   development:[
//     { 
//       definition: `
//       <button className="code-btn controlled">Ver Ejemplo</button> <br/><br/>Los componentes controlados son aquellos cuyo estado es controlado por React a través de props y eventos. Por otro lado, los componentes no controlados manejan su propio estado interno y proporcionan devoluciones de llamada para notificar cambios. Estos patrones ofrecen diferentes enfoques para gestionar el estado y el flujo de datos en los componentes.
//       <br/>
//     `, 
//     image: "",
//   }
//   ]
// };

// export const U4L6 = {
//   title: "Container Components y Presentational Components", 
//   development:[
//     { 
//       definition: `
//       <button className="code-btn container-presentational">Ver Ejemplo</button> <br/><br/>Este patrón se basa en la separación de componentes en dos categorías: los Container Components (componentes contenedores) y los Presentational Components (componentes de presentación). Los Container Components se encargan de la lógica del estado y las operaciones, mientras que los Presentational Components se centran en la representación visual de la interfaz de usuario. Esta separación facilita la comprensión y el mantenimiento del código.
//     `, 
//     image: "",
//   }
//   ]
// };