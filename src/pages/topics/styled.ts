import { styled } from "styled-components";
/**
 * border: "2px solid #eee", 
        minWidth: "100%", 
        height: "100vh", 
        width: "100vw"
 */
export const CustomArticle = styled("article")`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const CustomSection = styled("section")`
  border: 2px solid #eee;
  min-width: 100%;
  height: 100vh;
  width: 100vw;
`;