import React from 'react'
import Editor from '@components/editor/Editor';
import { IoCloseSharp } from "react-icons/io5";
import { IconContainer, OptionsContainer, StyledEditorContainer, TextContainer, WatchEditorButton } from './styled';
import toast from 'react-hot-toast';
import {useSetAllListeners} from './hook/useSetAllListeners';

const EditorContainer = () => {
  const { valueOne, valueTwo, onChangeOne, onChangeTwo } = useSetAllListeners();
  const [ show, setShow ] = React.useState({ one: true, two: true });

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
  

  return (
    <StyledEditorContainer>
      {
        show.one && (
          <TextContainer height={show.one && show.two ? 50 : 100}>
            <OptionsContainer>
              {!show.two && (<WatchEditorButton onClick={() => handleShowEditor("two")} className='code-btn'>ver editor 2</WatchEditorButton>)}
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
              { !show.one && (<WatchEditorButton onClick={() => handleShowEditor("one")} className='code-btn'>ver editor 1</WatchEditorButton>)}
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