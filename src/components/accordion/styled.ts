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
  text-align: start;
  font-family: Avenir;
`;

export const Section = styled.section`
  position: relative;
`;

export const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
  padding: 2rem;
`;

export const AccordionContainer = styled.div``;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #5C469C;
  border-radius: 4px;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #5C469C;
  }
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

export const AccordionBody = styled.div<{ active: boolean; bodyHeight: number}>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
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
