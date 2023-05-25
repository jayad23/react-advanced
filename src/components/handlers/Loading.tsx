import { styled } from "styled-components"
import { Ping } from '@uiball/loaders'

const FloatedContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-family:inherit;
  font-weight: bold;

`;
const Loading = () => {
  return (
    <FloatedContainer>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
        The Document is being loaded...
        <Ping 
          size={45}
          speed={2} 
          color="black" 
        />
      </div>
    </FloatedContainer>
  )
}

export default Loading