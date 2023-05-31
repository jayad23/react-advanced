import { U1L1, U1L2, U1L3 } from "./unit-one";
import {U2L1, U2L2, U2L3, U2L4, U2L5, U2L6 } from "./unit-two";
import { U3L1, U3L2, U3L3, U3L4 } from "./unit-three";
export const topics = [
  {
    title: "1. Introducción a conceptos básicos de React",
    content: [U1L1, U1L2, U1L3],
    link: "/temario/patrones_diseño",
    image: "https://img.freepik.com/free-vector/abstract-chaotic-circles-design-pattern-background_1048-16639.jpg"
  },
  {
    title: "2. Patrones de Diseño",
    content: [U2L1, U2L2, U2L3, U2L4, U2L5, U2L6],
    link: "/temario/router_providers",
    image: "https://www.abc.org.uk/images/stories/arrows.jpg"
  },
  {
    title: "3. Code Splitting",
    content: [U3L1, U3L2, U3L3, U3L4],
    link: "/temario/code_splitting",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1673541584388/89c9e94d-1fbd-4969-b2d8-af0edec4937f.jpeg"
  },
  {
    title: "4. Styled Components",
    content: [
      {
        title: "Basic Styling",
        development: [{ definition: "Basic", image: ""}]
      },
      {
        title:  "Props & Condicionales",
        development: [{definition: "Props", image: ""}]
      },
      {
        title:  "GlobalCSS",
        development: [{ definition: "GlobalCSS", image: ""}]
      }
    ],
    link: "/temario/styled_components",
    image: "https://blog.logrocket.com/wp-content/uploads/2020/12/styled-components-react.png"
  },
  {
    title: "5. Manejo de Asincronías",
    content: [
      {
        title: "Controller Object",
        development:[{ definition: "Object Controller", image: ""}]
      },
      {
        title:  "React Query",
        development: [{ definition: "React Query", image: ""}]
      }
    ],
    link: "/temario/http_requests",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgPLL_8S4LsW41PFXjrREMnjY0EUGq9M4pQ&usqp=CAU"
  }
];