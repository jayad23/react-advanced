import { useState, useEffect, useCallback } from "react";
import {templateGenerator} from "../template";
import { injectedButtonCollection, buttonProps } from "@topics/listenersCollection";

export const useSetAllListeners = () => {
  const { template: templateOne } = templateGenerator("one");
  const { template: templateTwo } = templateGenerator("two");
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

    const buttonElementsCollection = injectedButtonCollection.map((element: buttonProps) => (document.querySelector(element.className)));

    for(const i in buttonElementsCollection){
      buttonElementsCollection[i]?.addEventListener("click", () => handleInjectedButton(injectedButtonCollection[i].template, injectedButtonCollection[i].editor));
    }

    return () => {
      for(const i in buttonElementsCollection){
      buttonElementsCollection[i]?.removeEventListener("click", () => handleInjectedButton(injectedButtonCollection[i].template, injectedButtonCollection[i].editor));
    }
    }
  }, []);

  return { valueOne, valueTwo, onChangeOne, onChangeTwo };
};