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
      Los componentes de clase son clases de JavaScript que extienden la clase base <code><span className="green">React.Component</span></code>.<br/>
      <br/>
      Permiten utilizar el estado <code><span className="red">state = {}</span></code> y métodos de ciclo de vida en la lógica del componente. Se definen utilizando la sintaxis de clases de JavaScript.<br/>
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

export const U1L2 = {
  title: "Características Avanzadas de React", 
  development:[
    { 
      definition: `
      <i>Introducción a los React Hooks</i>:<br/>
      <br/>
        Los React Hooks son una característica introducida en React 16.8 que permiten utilizar estado y otras características de React en componentes funcionales sin necesidad de utilizar componentes de clase. Los Hooks ofrecen una forma más concisa y legible de escribir componentes, y simplifican la reutilización de lógica entre diferentes componentes. Dado el nivel aspirado para este track, obviaremos los hooks básicos como <code><span className="red">useState</span></code>, y <code><span  className="green">useEffect</span></code> <i><span className="notation">(aunque de este volveremos a hablar más adelante)</span></i> Por ahora es útil preguntarnos cómo se reutilizaba la lógica de componentes antes de la llegada de los hooks, en los componentes de Clase.<br/>
      <br/>
        En los componentes de clase, la reutilización de lógica se logra mediante la utilización de componentes de orden superior (Higher-Order Components, HOCs) y la herencia de componentes. <br/>
      <br/>
      <i>HIGHER ORDER COMPONENTS (HOCs)</i>: <button className="code-btn hoc">Ver Ejemplo</button><br/>
      <br/>
        En este ejemplo, el HOC <code><span className="green">withMousePosition</span></code> envuelve el componente <code><span className="red">MouseTrack</span></code> y <code><span className="red">SecondMouseTrack</span></code>, los transforma en <code><span className="green">EnhancedMouseTrack</span></code> & <code><span className="green">EnhancedSecondMouseTrack</span></code> respectivamente, y agrega la funcionalidad de medir el tiempo de renderización. Luego, el componente actualizado se exporta y puede utilizarse en lugar del componente original.<br/>
      <br/>
      Son simples y directos, ya que no tienen estado ni métodos de ciclo de vida propios.<br/>
      <br/>
      <i>COMPOSITION en lugar de HERENCIA</i>: <button className="code-btn comp">Ver Ejemplo</button><br/>
      <br/>
        La composición en React es un patrón de diseño que permite combinar componentes más pequeños para construir componentes más complejos y reutilizables. En lugar de depender de la herencia de componentes, donde un componente hereda las propiedades y comportamientos de otro componente, la composición se basa en la combinación de componentes existentes para formar una nueva entidad.<br/>
      <br/>
        La estructura jerárquica y la composición se mantienen igual que en el ejemplo anterior, pero utilizando componentes de clase en lugar de componentes funcionales.<br/>
      <br/>
        Recuerda que a partir de la versión 16.8 de React, se introdujeron los Hooks, lo cual ha llevado a un enfoque más común en el uso de componentes funcionales en lugar de componentes de clase. Sin embargo, es válido utilizar componentes de clase si así lo prefieres o si estás trabajando en un proyecto más antiguo que aún utiliza esta sintaxis.<br/>
      <br/>
    `, 
    image: "",
  }
  ]
};