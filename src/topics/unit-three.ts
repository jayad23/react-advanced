export const U3L1 = {
  title: "Concepto", 
  development:[
    { 
      definition: `
      El Code Splitting en React es una técnica utilizada para dividir el código de una aplicación en partes más pequeñas y cargar solo lo necesario en el momento adecuado. Esto ayuda a mejorar el rendimiento y la experiencia del usuario al reducir los tiempos de carga inicial y permitir la carga bajo demanda de módulos adicionales. <br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U3L2 = {
  title: "Lazy", 
  development:[
    { 
      definition: `
      React.lazy es una función incorporada que permite cargar componentes de forma diferida (lazy load). Puedes envolver tus componentes en la función React.lazy y especificar una función de importación para cargar el componente de manera perezosa cuando sea necesario. <br/>
      <br/>
      <button className="code-btn lazy">Ver Ejemplo</button><br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U3L3 = {
  title: "Suspense", 
  development:[
    { 
      definition: `
      React Suspense es un componente que te permite mostrar un indicador de carga mientras se carga un componente diferido utilizando React.lazy. Puedes envolver el componente diferido en un bloque Suspense y proporcionar un fallback (elemento de respaldo) que se mostrará durante la carga. <br/>
      <br/>
      <button className="code-btn suspense">Ver Ejemplo</button><br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U3L4 = {
  title: "React Router", 
  development:[
    { 
      definition: `
      Si estás utilizando <span className="red">React Router</span> para la navegación en tu aplicación, puedes aprovechar su capacidad de carga diferida incorporada. Puedes usar la función <code><span className="red">React.lazy</span></code> junto con <code><span className="red">React Router</span></code> para cargar los componentes de las rutas de forma diferida. <br/>
      <br/>
      <ol className="injected-list">
        <li><span className="green">Ejemplo uno</span>: <button className="code-btn react-router-one">Ver</button></li><br/>

        <li><span className="green">Ejemplo dos</span>: <button className="code-btn react-router-two">Ver</button></li><br/>

        <li><span className="green">Ejemplo tres</span>: <button className="code-btn react-router-three">Ver</button></li><br/>

      </ol>
      Estos son solo algunos ejemplos de cómo implementar el Code Splitting en React. Ten en cuenta que el Code Splitting puede ser especialmente útil en aplicaciones grandes con muchas dependencias y múltiples rutas. Al dividir el código en partes más pequeñas y cargarlo bajo demanda, se puede mejorar significativamente el tiempo de carga inicial y la eficiencia general de la aplicación.<br/>
      <br/>
      Recuerda evaluar cuidadosamente tu aplicación y las necesidades específicas antes de aplicar el Code Splitting, ya que puede haber escenarios en los que el beneficio no sea significativo o incluso pueda afectar negativamente el rendimiento en algunos casos. <br/>
    `, 
    image: "",
  }
  ]
};