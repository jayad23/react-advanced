import { styled } from "styled-components";

/**
 * position: "absolute",zIndex:"2", right: "10px",padding: ".25em", cursor: "pointer"
 */

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