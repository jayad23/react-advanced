import React, { useEffect } from 'react'
import Editor from '@components/editor/Editor';
import { IoCloseSharp } from "react-icons/io5";
import { IconContainer, OptionsContainer, StyledEditorContainer, TextContainer } from './styled';
import { templateGenerator } from "./template";
import toast from 'react-hot-toast';

const EditorContainer = () => {
  const { template: templateOne } = templateGenerator("");
  const { template: templateTwo } = templateGenerator("");
  const [ show, setShow ] = React.useState({ one: true, two: true });
  const [valueOne, setValueOne] = React.useState(JSON.parse(localStorage.getItem("valueOne") as string) || templateOne);
  const [valueTwo, setValueTwo] = React.useState(JSON.parse(localStorage.getItem("valueTwo") as string) || templateTwo);
  const [ , setUpdateView ] = React.useState<null | VisualViewport>(null);

  const onChangeOne = React.useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueOne", JSON.stringify(value));
    setValueOne(value);
    setUpdateView(viewUpdate);
  }, []);

  const onChangeTwo = React.useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueTwo", JSON.stringify(value));
    setValueTwo(value);
    setUpdateView(viewUpdate);
  }, []);

  const handleHideEditor = (editorId: string) => {
    if(editorId === "one" && show.two){
      return setShow({...show, one: false })
    }
    if(editorId === "two" && show.one){
      return setShow({...show, two: false })
    }

    toast.error("Solo puedes cerrar un editor")
  };

  const handleShowEditor = (editorId: string) => {
    if(editorId === "one"){
      return setShow({...show, one: true })
    }
    if(editorId === "two"){
      return setShow({...show, two: true })
    }

    toast.error("Solo puedes cerrar un editor")
  };
  
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
    functionalComponentButton?.addEventListener("click", () => handleInjectedButton("functional-component-example", "one"));
    classComponentButton?.addEventListener("click", () => handleInjectedButton("class-component-example", "two"));
    hocComponentButton?.addEventListener("click", () => handleInjectedButton("hoc", "one"));
    compComponentButton?.addEventListener("click", () => handleInjectedButton("comp", "two"));

    return () => {
      functionalComponentButton?.removeEventListener("click", () => handleInjectedButton("functional-component-example", "one"));
      classComponentButton?.removeEventListener("click", () => handleInjectedButton("class-component-example", "two"));
      hocComponentButton?.removeEventListener("click", () => handleInjectedButton("hoc", "one"));
      compComponentButton?.removeEventListener("click", () => handleInjectedButton("comp", "two"));
    }
  }, []);

  return (
    <StyledEditorContainer>
      {
        show.one && (
          <TextContainer height={show.one && show.two ? 50 : 100}>
            <OptionsContainer>
              {!show.two && (<button onClick={() => handleShowEditor("two")} className='code-btn'>ver editor 2</button>)}
              <IconContainer onClick={() => handleHideEditor("one")}>
                <IoCloseSharp color="white" />
              </IconContainer>
            </OptionsContainer>
            <Editor value={valueOne} onChange={onChangeOne} />
          </TextContainer>
        )
      }
      {
        show.two && (
          <TextContainer height={show.one && show.two ? 50 : 100}>
            <OptionsContainer>
              { !show.one && (<button onClick={() => handleShowEditor("one")} className='code-btn'>ver editor 1</button>)}
              <IconContainer onClick={() => handleHideEditor("two")}>
                <IoCloseSharp color="white" />
              </IconContainer>
            </OptionsContainer>
            <Editor value={valueTwo} onChange={onChangeTwo} />
          </TextContainer>
        )
      }
    </StyledEditorContainer>
  )
}

export default EditorContainer;