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
      <i>PORTALES</i>:
      <br/>
        Los portales en React son una característica que permite renderizar componentes fuera del árbol de componentes principal de la aplicación. Esto significa que puedes representar elementos en un lugar distinto al nodo raíz de tu aplicación, lo que resulta útil para casos en los que necesitas renderizar contenido en un nodo específico del <code><span className="green">DOM</span></code> que está separado del flujo normal de componentes.<br/>
      <br/>
        Aquí tienes algunos ejemplos de uso de portales en React:<br/>
      <br/>
      1. Modal: <button className="code-btn ptrl">Ver Ejemplo</button><br/> <br/>Puedes crear un componente de modal que se renderice en un nodo del DOM fuera del componente principal. Esto te permite mostrar el modal superpuesto a otros elementos de la interfaz de usuario sin afectar la estructura de los componentes principales.<br/>
      <br/>
      En este ejemplo, el componente Modal utiliza <code><span className="red">ReactDOM.createPortal</span></code> para renderizar su contenido en el nodo con el <code><span className="green">ID 'modal-root'</span></code>. El nodo <code><span className="green">'modal-root'</span></code> puede estar en cualquier lugar del <code><span className="green">DOM</span></code>, incluso fuera del árbol de componentes principal.<br/>
      <br/>
      2. Componentes Incrustados: <button className="code-btn incrustados">Ver Ejemplo</button><br/> <br/>Puedes utilizar portales para renderizar componentes en nodos específicos del DOM, como un reproductor de video o un mapa, que requieren una integración especializada y no están directamente relacionados con la estructura de los componentes principales.<br/>
      <br/>
      En este ejemplo, el componente VideoPlayer utiliza <code><span className="red">ReactDOM.createPortal</span></code> para renderizar el reproductor de video en el nodo con el ID 'video-player', que puede estar en cualquier parte del  <code><span className="green">DOM</span></code>.<br/>
      <i><span className="notation">P.S. En este proyecto usamos este patrón.</span></i>
      <br/>
      <br/>
      Los portales en React son una herramienta útil para renderizar contenido fuera del árbol de componentes principal y ofrecen mayor flexibilidad y control sobre la representación de elementos en la interfaz de usuario. Espero que estos ejemplos te ayuden a comprender mejor cómo utilizar los portales en React. <br/>
    `, 
    image: "",
  }
  ]
};

export const U1L3 = {
  title: "Importancia de aprender React Avanzado", 
  development:[
    { 
      definition: `
      <i>Aprender React avanzado es de gran importancia para los desarrolladores de React por varias razones:</i>:<br/>
      <br/>
      <ol className="injected-list">
        <li>Eficiencia y rendimiento: Conocer las características y técnicas avanzadas de React te permite optimizar el rendimiento de tus aplicaciones. Puedes aprender a implementar estrategias como la renderización condicional, la memoización de componentes y el uso adecuado de los ciclos de vida para mejorar la eficiencia y reducir la carga de trabajo del navegador.</li>
        <br/>
        <li>Escalabilidad y mantenibilidad: React avanzado proporciona herramientas y patrones que te permiten desarrollar aplicaciones más escalables y fáciles de mantener. Puedes aprender a estructurar tus componentes de manera modular, separar la lógica del estado de la interfaz de usuario, y aplicar patrones de diseño como contenedor/componente, alto orden de componentes y render props para crear componentes reutilizables y fácilmente mantenibles.</li>
        <br/>
        <li>Integración con otras bibliotecas y herramientas: React es una biblioteca muy popular y utilizada en el ecosistema de desarrollo web. Aprender React avanzado te permitirá integrarlo de manera efectiva con otras bibliotecas y herramientas como Redux, GraphQL, TypeScript y diversas librerías de UI para crear aplicaciones más potentes y flexibles.</li>
        <br/>
        <li>Gestión avanzada del estado: React proporciona el contexto y los Hooks, como useState, useEffect y useContext, que te permiten manejar el estado de tu aplicación de manera más sofisticada. Aprender a utilizar estas herramientas te permitirá manejar el estado compartido de manera efectiva, crear efectos secundarios y trabajar con flujos de datos más complejos.</li>
        <br/>
        <li>Mejorar tus habilidades como desarrollador: Aprender React avanzado no solo ampliará tus conocimientos técnicos, sino que también te ayudará a mejorar tus habilidades de resolución de problemas, diseño de arquitectura y toma de decisiones técnicas. Estas habilidades son altamente valoradas en la industria y te ayudarán a convertirte en un desarrollador más completo y competente.</li>
      </ol>
      <br/>
      En resumen, aprender React avanzado te permitirá aprovechar al máximo la biblioteca, optimizar tus aplicaciones, crear componentes reutilizables, manejar el estado de manera eficiente, integrarte con otras herramientas y mejorar tus habilidades como desarrollador. Esto te abrirá nuevas oportunidades y te ayudará a destacar en el mundo del desarrollo web.<br/>
      <br />
      <span className="notation">Utiliza el editor del site para que experimentes. Borra el código e intenta escribirlo nuevamente. Cópialo y pégalo en tu editor para que juegues con él.</span>
    `, 
    image: "",
  }
  ]
};