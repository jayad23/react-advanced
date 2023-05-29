export const U1L1 = {
  title: "Componentes y su estructura", 
  development:[
    { 
      definition: `
      <i>Componentes en React</i>:<br/>
      <br/>
      Los componentes son bloques de construcción fundamentales en React. <br/>
      Representan partes reutilizables y autónomas de la interfaz de usuario. <br/>
      Permiten dividir la interfaz en piezas más pequeñas y manejables.<br/>
      <br/>
      <i>COMPONENTES FUNCIONALES</i>: <button className="code-btn one">Ver Ejemplo</button><br/>
      <br/>
      Los componentes funcionales son funciones de JavaScript que devuelven elementos de React (JSX).<br/>
      <br/>
      Se definen utilizando la sintaxis de funciones de JavaScript o funciones flecha.<br/>
      <br/>
      Son simples y directos, ya que no tienen estado ni métodos de ciclo de vida propios.<br/>
      <br/>
      <i>COMPONENTES DE CLASE</i>: <button className="code-btn two">Ver Ejemplo</button><br/>
      <br/>
      Los componentes de clase son clases de JavaScript que extienden la clase base <code>React.Component</code>.<br/>
      <br/>
      Permiten utilizar el estado <code>state = {}</code> y métodos de ciclo de vida en la lógica del componente. Se definen utilizando la sintaxis de clases de JavaScript.<br/>
      <br/>
      Ejemplo de un componente de clase.<br/>
      <br/>
      Es posible encontrar proyectos hechos con componentes de clases en la actualidad. React ha evolucionado a lo largo del tiempo, y desde la introducción de los React Hooks en la versión 16.8, los componentes funcionales se han vuelto más populares debido a su simplicidad y legibilidad. <br/>
      <br/>
      La migración de componentes de clases a componentes funcionales es un proceso que se puede realizar en proyectos existentes si se desea aprovechar las ventajas y la sintaxis más concisa de los componentes funcionales, de ahí la importancia de entender la API de ambos componentes. En los editores hay un ejemplo de cómo se declara un estado, y se actualiza el mismo en ambos componentes.<br/>
      <br/>
    `, 
    image: "",
  }
  ]
};
