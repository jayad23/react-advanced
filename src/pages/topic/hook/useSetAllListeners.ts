import { useState, useEffect, useCallback } from "react";
import {templateGenerator} from "../template";

export const useSetAllListeners = () => {
  const { template: templateOne } = templateGenerator("");
  const { template: templateTwo } = templateGenerator("");
  const [valueOne, setValueOne] = useState(JSON.parse(localStorage.getItem("valueOne") as string) || templateOne);
  const [valueTwo, setValueTwo] = useState(JSON.parse(localStorage.getItem("valueTwo") as string) || templateTwo);
  const [ , setUpdateView ] = useState<null | VisualViewport>(null);


  const onChangeOne = useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueOne", JSON.stringify(value));
    setValueOne(value);
    setUpdateView(viewUpdate);
  }, []);

  const onChangeTwo = useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueTwo", JSON.stringify(value));
    setValueTwo(value);
    setUpdateView(viewUpdate);
  }, []);

    useEffect(() => {
    const handleInjectedButton = (templateSelected: string, valueInStore: string) => {
      const { template } = templateGenerator(templateSelected);
      valueInStore === 'one' ? 
      localStorage.setItem("valueOne", JSON.stringify(template)) : 
      localStorage.setItem("valueTwo", JSON.stringify(template));
      valueInStore === 'one' ? 
      setValueOne(template) : 
      setValueTwo(template);
    };

    const functionalComponentButton = document.querySelector(".one");
    const classComponentButton = document.querySelector(".two");
    const hocComponentButton = document.querySelector(".hoc");
    const compComponentButton = document.querySelector(".comp");
    const modalComponentButton = document.querySelector(".ptrl");
    const incrustadosComponentButton = document.querySelector(".incrustados");
    functionalComponentButton?.addEventListener("click", () => handleInjectedButton("functional-component-example", "one"));
    classComponentButton?.addEventListener("click", () => handleInjectedButton("class-component-example", "two"));
    hocComponentButton?.addEventListener("click", () => handleInjectedButton("hoc", "one"));
    compComponentButton?.addEventListener("click", () => handleInjectedButton("comp", "two"));
    modalComponentButton?.addEventListener("click", () => handleInjectedButton("ptrl", "one"));
    incrustadosComponentButton?.addEventListener("click", () => handleInjectedButton("incrustados", "two"));

    return () => {
      functionalComponentButton?.removeEventListener("click", () => handleInjectedButton("functional-component-example", "one"));
      classComponentButton?.removeEventListener("click", () => handleInjectedButton("class-component-example", "two"));
      hocComponentButton?.removeEventListener("click", () => handleInjectedButton("hoc", "one"));
      compComponentButton?.removeEventListener("click", () => handleInjectedButton("comp", "two"));
      modalComponentButton?.removeEventListener("click", () => handleInjectedButton("ptrl", "one"));
      incrustadosComponentButton?.removeEventListener("click", () => handleInjectedButton("incrustados", "two"));
    }
  }, []);

  return { valueOne, valueTwo, onChangeOne, onChangeTwo };
};