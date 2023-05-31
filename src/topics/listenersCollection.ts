export const injectedButtonCollection = [
  {
    className: ".one",
    editor: "one",
    template: "functional-component-example"
  },
  {
    className: ".two",
    editor: "two",
    template: "class-component-example"
  },{
    className: ".hoc",
    editor: "one",
    template: "hoc"
  },{
    className: ".comp",
    editor: "two",
    template: "comp"
  },{
    className: ".ptrl",
    editor: "one",
    template: "ptrl"
  },{
    className: ".incrustados",
    editor: "two",
    template: "incrustados"
  },{
    className: ".cc",
    editor: "one",
    template: "cc"
  },{
    className: ".render-props",
    editor: "two",
    template: "render-props"
  },{
    className: ".controlled",
    editor: "one",
    template: "controlled"
  },{
    className: ".container-presentational",
    editor: "two",
    template: "container-presentational"
  },{
    className: ".lazy",
    editor: "one",
    template: "lazy"
  },{
    className: ".suspense",
    editor: "two",
    template: "suspense"
  },{
    className: ".react-router-one",
    editor: "one",
    template: "react-router-one"
  },
  {
    className: ".react-router-two",
    editor: "two",
    template: "react-router-two"
  },
  {
    className: ".react-router-three",
    editor: "one",
    template: "react-router-three"
  },
];

export interface buttonProps {
  className: string;
  editor: string;
  template: string;
}