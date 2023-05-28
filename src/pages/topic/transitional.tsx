import React from 'react'
import Editor from '@components/editor/Editor';
import { IoCloseSharp } from "react-icons/io5";
import { IconContainer, StyledEditorContainer, TextContainer } from './styled';
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

  //const [injectedBtnOne, setInjectedOne] = useState<Element | null>(null);
  //const [injectedBtnTwo, setInjectedTwo] = useState<Element | null>(null);

  // useEffect(() => {
  //   const btnOne = document.querySelector(".one");
  //   setInjectedOne(btnOne)
  //   const btnTwo = document.querySelector(".two");
  //   setInjectedTwo(btnTwo);
  //   return () => {
  //     btnOne?.removeEventListener("click", () => injectedBtnOne);
  //     btnTwo?.removeEventListener("click", () => injectedBtnTwo);
  //   }
  // }, []);

  // injectedBtnOne?.addEventListener("click", () => {
  //   const { template } = templateGenerator("functional-component-example");
  //   localStorage.setItem("valueOne", JSON.stringify(template));
  //   setValueOne(template);
  // });

  // injectedBtnTwo?.addEventListener("click", () => {
  //   const { template } = templateGenerator("class-component-example");
  //   localStorage.setItem("valueTwo", JSON.stringify(template));
  //   setValueTwo(template);
  // });

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