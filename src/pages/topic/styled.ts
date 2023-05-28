import { styled } from "styled-components";

export const PageContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const DefinitionContainer = styled("div")`
  width: 50%;
  padding: 10px;
  overflow: scroll;
  border-radius: 5px;
  border-right: 1px solid #eee;
  background-color: #282c34;
  color: rgba(255, 255, 255, 0.87);
`;

export const IconContainer = styled("div")`
  position: absolute;
  z-index: 2;
  right: 10px;
  padding: 0.25em;
  cursor: pointer;
`;

export const StyledEditorContainer = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
`

interface TextContainerProps {
  height: number;
}

export const TextContainer = styled("div")<TextContainerProps>`
  border: 1px solid #282c34;
  height: ${props => props.height}vh;
  overflow: scroll;
  outline: none;
  text-align: left;
  border-radius: 5px 5px 0px 0px;
  background-color: #282c34;
  position: relative;
`;

export const CustomDevelopmentTitle = styled("h4")`
  color: #ACB1D6;
  padding: 10px 0;
`;

export const StickyTitle = styled("h3")`
  position: sticky;
  top: 0;
  background: rgba( 255, 255, 255, 0.25 );
  //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 5px;
  //border: 1px solid rgba( 255, 255, 255, 0.18 );
  &:hover{
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;