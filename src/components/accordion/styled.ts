import styled, { css } from "styled-components";
import { HiExternalLink } from "react-icons/hi";

export const LinkIcon = styled(HiExternalLink)`
  color: #242424;
  @media (prefers-color-scheme: dark){
    color: white;
  };
`
//Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
export const Container = styled.main`
  position: relative;
  font-family: Avenir;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerSection = styled.div`
  position: relative;
  //max-width: 500px;
  width: 50%;
  padding: 2rem;
`;

export const AccordionContainer = styled.div` width: 100%; `;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

export const AccordionBody = styled.div<{ active: string; bodyheight: number}>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyheight }) =>
    active === "true" &&
    css`
      height: ${bodyheight}px;
    `}
`;

export const AccordionContent = styled.ul`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
  & > li {
    margin-left: 30px;
    font-size: 14px;
    letter-spacing: 0.1em;
  }
`;
