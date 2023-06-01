export const U5L1 = {
  title: "useEffect", 
  development:[
    { 
      definition: `
      useEffect es uno de los hooks más populares de React a partir de la versión 16.8 en el 2016. La intención del hook es manejar los efectos secundarios del componente. <br/>
      Estos efectos secundarios, en términos planos, se refiere a comportamientos que se generan a partir de eventos ya sea interno (de la app misma), o externos (propiciados por eventos del usuario).<br/>
      <br/>
      Este hook tiene muchas características que lo hacen muy reactivo, ya que está atento a todos los momentos del componente- interpreta la evolución / actualización del estado del componente desde el momento en el que se monta con el fin de entender cómo y cuántas veces debe manejar esos efectos secundarios. <br/>
      <br/>
      useEffect es la evolución <code><span className="white">hook</span></code> de los Métodos de Ciclo de vida, que se encargaban de estos efectos secundarios en componentes de Clase.<br/>
      Para entender mejor este hook ups & downs, les sugiero leer este artículo que escribí sobre el asunto: <a href="https://dev.to/jayad23/donde-ponemos-el-useeffect-1e0n" target="_blank"><span className="white">leer</span></spann></a><br/>
      Para este tema daremos por sentado que ya han usado el useEffect para realizar solicitudes asíncronas a API's, ó interacturar nativamente con eventos del DOM, por ende continuaremos el tema entendiendo mejor los métodos de ciclo de vida:<br/>
      <br/>
      <i><code><span className="green">componentDidMount</span></code></i> es uno de los métodos del ciclo de vida en los componentes de clase de React. Se llama automáticamente una vez que el componente ha sido montado en el DOM (es decir, después de que el componente se haya renderizado por primera vez). Es el lugar adecuado para realizar tareas de inicialización, como cargar datos desde una API externa, configurar suscripciones a eventos o establecer cualquier estado necesario.<br/>
      <a href="https://i.ibb.co/vZ0jLJL/Screenshot-2023-05-31-at-18-06-46.png" alt="componentDidMount" target="_blank"><img className="injected-img" src="https://i.ibb.co/vZ0jLJL/Screenshot-2023-05-31-at-18-06-46.png" alt="componentDidMount" /></a>
      <br/>
      <i><code><span className="green">componentDidUpdate</span></code></i>  es otro método del ciclo de vida en los componentes de clase de React. Se llama automáticamente después de que el componente se haya actualizado, es decir, después de que se haya realizado una nueva renderización. Es útil para realizar acciones específicas inmediatamente se actualice el estado.<br/>
      <a href="https://i.ibb.co/QXLpLYH/Screenshot-2023-05-31-at-18-13-34.png" alt="componentDidUpdate" target="_blank">
        <img className="injected-img" src="https://i.ibb.co/QXLpLYH/Screenshot-2023-05-31-at-18-13-34.png" alt="componentDidUpdate" />
      </a>
      <br/>
      En este ejemplo, el método componentDidUpdate se llama automáticamente después de cada actualización del componente. Dentro de este método, se realiza una verificación para determinar si el estado anterior prevState.count es diferente al estado actual this.state.count. Si hay una diferencia, se imprime un mensaje en la consola indicando que el estado count ha sido actualizado y se muestra el nuevo valor.<br/>
      <br/>
      Es importante tener en cuenta que, al utilizar componentDidUpdate, se debe tener cuidado para evitar bucles infinitos de actualización. Por ejemplo, si se actualiza el estado dentro de componentDidUpdate sin una condición adecuada, puede provocar una nueva renderización y, a su vez, desencadenar una llamada infinita a componentDidUpdate. Por lo tanto, se recomienda utilizar las comparaciones adecuadas para evitar actualizaciones innecesarias y controlar las condiciones de actualización en el componente. <br/>
      <br/>
      <i><code><span className="green">componentWillUnmount</span></code></i> método del ciclo de vida en los componentes de clase de React. Se llama automáticamente justo antes de que el componente sea desmontado y eliminado del DOM. Es un lugar adecuado para realizar tareas de limpieza y liberar recursos, como cancelar suscripciones a eventos, detener temporizadores o liberar memoria asignada.<br/>
      <a href="https://i.ibb.co/cw22bCn/Screenshot-2023-05-31-at-18-18-48.png" alt="componentWillUnmount" target="_blank">
        <img className="injected-img" src="https://i.ibb.co/cw22bCn/Screenshot-2023-05-31-at-18-18-48.png" alt="componentWillUnmount" />
      </a>
      <br/>
      Mira este ejemplo en el que se integran todos, juega un poco con ello y analiza la información: <button className="code-btn life-cycle">Ver Ejemplo</button>
      <br/>
    `, 
    image: "",
  }
  ]
};

export const U5L2 = {
  title: "Abort Controller", 
  development:[
    { 
      definition: `
      <code><span className="red">AbortController</span></code> es una interfaz proporcionada por el navegador web que permite la cancelación de operaciones asincrónicas, como solicitudes de red o timers. Proporciona un mecanismo para anular o abortar una operación antes de que se complete.<br/>
      La clase se instancia y se utiliza en combinación con la función fetch() para cancelar solicitudes de red. Permite que una solicitud en curso sea abortada antes de que se complete, lo que es especialmente útil en situaciones en las que el usuario decide cancelar una acción o cambiar de página mientras la solicitud está en progreso.<br/>
      <br/>
      <a href="https://i.ibb.co/9yTbrGs/Screenshot-2023-05-31-at-18-30-54.png" target="_blank">
        <img className="injected-img" src="https://i.ibb.co/9yTbrGs/Screenshot-2023-05-31-at-18-30-54.png" alt="abort-controller" />
      </a>
      <br/>
      En este ejemplo, se crea un nuevo AbortController y se obtiene la señal <code><span className="white">signal</span></code> del controller. Luego, la señal se pasa como una opción en la configuración de la solicitud de <code><span className="purple">fetch()</span></code>. Cuando se llama al método <code><span className="purple">abort()</span></code> del controller, la solicitud se cancela y se captura el <code><span className="pink">error</span></code> AbortError.<br/>
      Ejemplo de Controller en useEffect: <button className="code-btn abort-controller">Ver</button>
    `, 
    image: "",
  }
  ]
};

export const U5L3 = {
  title: "React Query", 
  development:[
    { 
      definition: `
      React Query es una librería para manejos asíncronicos que se ha abierto paso en la comunidad React ganando relevancia por las mejoras que propone.<br/>
      Típicamente, tal como se muestra en los ejemplos anteriores, useEffect es el hook por el que se ejecuta un <code><span className="white">fetch()</span></code> tan pronto se monta el componente.<br/>
      Sin embargo, deja otros elementos sin atender a los que el programador debe prestar atención: <br/>
      <ul className="injected-list">
        <li>Evitar abuso de recursos API.</li>
        <li>Manejo de estado loading / error / data </li>
        <li>Loops infinitos o actualizaciónes en estado que detonen efectos secundarios indeseados.</li>
      </ul>
      <br/>
      Todos estos elementos se evalúan dentro del planteamiento del proyecto y la necesidad del mismo en mantener un estado local o un estado global, y sobre qué elementos deberían existir en ambos estados
      cuando estos coexisten en el proyecto, lo cual es en la mayoría de casos.<br/>
      <br/>
      React Query se encarga de todos esos problemas, y uno más:<br/>
      <ul className="injected-list">
        <li>Evita el abuso de recursos API con su habilidad de cachear los datos antes de procesar una nueva solicitud.</li>
        <li>Manejo de estado loading / error / data / isFetched y muchas propiedades más que retorna el hook <span className="green">useQuery()</span>.</li>
        <li>Evita loops infinitos o actualizaciónes en estado que detonen efectos secundarios indeseados ya que no require ser encapsulado en un useEffect, y realiza tu tarea de forma automática tan pronto el componente se ha montado.<br/></li>
      </ul>
      <br/>
      ¿Cómo lo hacemos? <br/>
      <ul className="injected-list">
        <li>instalamos la lib. <code><span className="green">npm i react-query</span></code></li>
        <li>Configurar el Provider y Cliente desde el punto más alto de la app.</li>
        <li><img src="https://i.ibb.co/cN8wjnB/Screenshot-2023-06-01-at-16-57-18.png" alt="query-provider" className="injected-img"/></li>
        <br/><i><span className="red">En este punto, ya deberíamos tener el proyecto funcionando sin problemas</span></i>
        <br/><li>Para realizar <code><span className="green">GET</span></code> usamos el hook <button className="code-btn useQuery"><span className="pink">useQuery()</span></button></li>
        <li>Para realizar <code><span className="green">POST - PATCH - PUT</span></code> usamos el hook <button className="code-btn useMutation"><span className="pink">useMutation()</span></button></li>
      </ul>
    `, 
    image: "",
  }
  ]
};

export const U5L4 = {
  title: "Consideraciones", 
  development:[
    { 
      definition: `
      Es importante tener cuidado con el uso de useEffect debido a algunas consideraciones clave:
      <br/>
      <br/>
      <ol className="injected-list">
        <li>
          <span className="white">Efectos secundarios innecesarios--'useEffect'</span>: Permite realizar cualquier tipo de efecto secundario, como solicitudes de red, manipulación del DOM o suscripciones a eventos. Sin embargo, es crucial asegurarse de que los efectos secundarios sean necesarios y estén relacionados con el componente. Evita realizar efectos secundarios excesivos o no relacionados, ya que pueden afectar el rendimiento y la legibilidad del código.
        </li><br/>
        <li>
          <span className="white">Actualización infinita</span>: Si no se proporciona una matriz de dependencias como segundo argumento de useEffect, el efecto se ejecutará en cada renderizado del componente. Esto puede provocar una actualización infinita si el efecto modifica el estado que desencadena una nueva renderización. Asegúrate de proporcionar una matriz de dependencias adecuada para controlar cuándo se debe ejecutar el efecto.
        </li><br/>
        <li>
          <span className="white">Dependencias mal configuradas</span>: Si se proporciona una matriz de dependencias como segundo argumento de useEffect, es importante tener en cuenta qué variables deben incluirse en esa matriz. Si se omiten algunas dependencias necesarias, el efecto no se actualizará correctamente cuando esas dependencias cambien. Por otro lado, si se incluyen dependencias innecesarias, el efecto se ejecutará innecesariamente cuando no haya cambios relevantes. Asegúrate de configurar correctamente las dependencias del efecto.
        </li><br/>
        <li>
          <span className="white">Ciclos de vida inconsistentes-- useEffect</span>: Es una combinación de varios métodos de ciclo de vida de los componentes de clase, pero no siempre se comporta exactamente igual. Por ejemplo, el efecto se ejecuta después de que el componente se haya renderizado, mientras que componentDidMount se ejecuta antes. Además, ten en cuenta que el efecto se ejecuta en cada renderizado del componente, no solo en la fase de montaje. Asegúrate de entender las diferencias y ajustar tu lógica en consecuencia.
        </li><br/>
      </ol> 
      <br/>
      Para evitar problemas con useEffect, se recomienda leer y comprender completamente la documentación oficial de React sobre este gancho. Además, es útil seguir buenas prácticas de programación, como separar los efectos en funciones más pequeñas, mantener un código limpio y legible, y realizar pruebas exhaustivas para garantizar el correcto funcionamiento de los efectos secundarios en tu aplicación. <br/>
      <br/>
      <br/>
    `, 
    image: "",
  }
  ]
};

// export const U5L5 = {
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

// export const U5L6 = {
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