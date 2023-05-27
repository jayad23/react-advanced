import React from 'react'
import Editor from '@components/editor/Editor';
import { IoCloseSharp } from "react-icons/io5";
import { IconContainer, StyledEditorContainer, TextContainer } from './styled';
import toast from 'react-hot-toast';

const EditorContainer = () => {
  const [ show, setShow ] = React.useState({ one: true, two: true });
  const [valueOne, setValueOne] = React.useState(JSON.parse(localStorage.getItem("valueOne") as string) || "//1.) Empieza tu código aquí!");
  const [valueTwo, setValueTwo] = React.useState(JSON.parse(localStorage.getItem("valueTwo") as string) || "//2.) Empieza tu código aquí!");
  const [ view, setUpdateView ] = React.useState<null | VisualViewport>(null);
  
  const onChangeOne = React.useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueOne", JSON.stringify(value));
    setValueOne(value);
    setUpdateView(viewUpdate);
    console.log(value);
  }, []);

  const onChangeTwo = React.useCallback((value: string, viewUpdate: VisualViewport) => {
    localStorage.setItem("valueTwo", JSON.stringify(value));
    setValueTwo(value);
    setUpdateView(viewUpdate);
    console.log(value);
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

  return (
    <StyledEditorContainer>
      {
        show.one && (
          <TextContainer height={show.one && show.two ? 50 : 100}>
            <IconContainer onClick={() => handleHideEditor("one")}>
              <IoCloseSharp color="white" />
            </IconContainer>
            <Editor value={valueOne} onChange={onChangeOne} />
          </TextContainer>
        )
      }
      {
        show.two && (
          <TextContainer height={show.one && show.two ? 50 : 100}>
            <IconContainer onClick={() => handleHideEditor("two")}>
              <IoCloseSharp color="white" />
            </IconContainer>
            <Editor value={valueTwo} onChange={onChangeTwo} />
          </TextContainer>
        )
      }
    </StyledEditorContainer>
  )
}

export default EditorContainer;