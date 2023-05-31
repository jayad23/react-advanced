export const U2L1 = {
  title: "Definición", 
  development:[
    { 
      definition: `Los patrones de diseño avanzados son técnicas y soluciones probadas que se utilizan para abordar problemas comunes en el desarrollo de aplicaciones con React. Estos patrones ayudan a mejorar la estructura, modularidad, reutilización y mantenibilidad del código. A continuación, se presentan algunos patrones de diseño avanzados en React:<br/>
      <br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U2L2 = {
  title: "Contenedor/Componente", 
  development:[
    { 
      definition: `
      <button className="code-btn cc">Ver Ejemplo</button> <br/><br/>Este patrón separa la lógica del estado y las operaciones de la interfaz de usuario en componentes separados. Los contenedores son componentes que manejan la lógica del estado y las operaciones, mientras que los componentes se encargan de la presentación de la interfaz de usuario. Esto permite una mejor separación de preocupaciones y facilita la reutilización de los componentes de presentación.
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U2L3 = {
  title: "Render Props", 
  development:[
    { 
      definition: `
      <button className="code-btn render-props">Ver Ejemplo</button> <br/><br/>El patrón Render Props consiste en pasar una función como prop a un componente para que este pueda renderizar contenido dinámico o compartir lógica con otros componentes. Esto permite la reutilización de la lógica y facilita la composición de componentes.
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U2L4 = {
  title: "HOC's", 
  development:[
    { 
      definition: `
      <button className="code-btn hoc">Ver Ejemplo</button> <br/><br/>Los HOC son funciones que toman un componente y devuelven un nuevo componente enriquecido con funcionalidad adicional. Esto permite la reutilización de lógica entre varios componentes y evita la duplicación de código. Los HOC son especialmente útiles cuando se necesita agregar características como la gestión del estado, el enrutamiento o la autenticación a múltiples componentes.
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U2L5 = {
  title: "Componentes controlados y no controlados", 
  development:[
    { 
      definition: `
      <button className="code-btn controlled">Ver Ejemplo</button> <br/><br/>Los componentes controlados son aquellos cuyo estado es controlado por React a través de props y eventos. Por otro lado, los componentes no controlados manejan su propio estado interno y proporcionan devoluciones de llamada para notificar cambios. Estos patrones ofrecen diferentes enfoques para gestionar el estado y el flujo de datos en los componentes.
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U2L6 = {
  title: "Container Components y Presentational Components", 
  development:[
    { 
      definition: `
      <button className="code-btn container-presentational">Ver Ejemplo</button> <br/><br/>Este patrón se basa en la separación de componentes en dos categorías: los Container Components (componentes contenedores) y los Presentational Components (componentes de presentación). Los Container Components se encargan de la lógica del estado y las operaciones, mientras que los Presentational Components se centran en la representación visual de la interfaz de usuario. Esta separación facilita la comprensión y el mantenimiento del código.
    `, 
    image: "",
  }
  ]
};