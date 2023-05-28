import { styled } from "styled-components";

export const SectionCardContainer = styled("article")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
`;

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
  @media(prefers-color-scheme: dark){
    border: 2px solid #282c34;
  }
`;