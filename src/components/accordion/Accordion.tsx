import { useState, useRef, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import {AccordionDataProps, AccordionItemProps, ContentProps} from './types';
import {LinkIcon,AccordionBody, AccordionContainer, AccordionContent, AccordionInner, AccordionItem, AccordionTitle, Container, InnerSection, Section} from './styled';
import IndexList from './IndexList';

export const Accordion = ({ data }: { data: Array<AccordionDataProps> }) => {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const item0 = useRef<HTMLUListElement>(null);
  const item1 = useRef<HTMLUListElement>(null);
  const item2 = useRef<HTMLUListElement>(null);
  const item3 = useRef<HTMLUListElement>(null);
  const item4 = useRef<HTMLUListElement>(null);
  const item5 = useRef<HTMLUListElement>(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  return (
    <Container>
      <Section>
        <InnerSection>
          <AccordionContainer>
            <AccordionInner>
              <AccordionItems
                  accordionContent={data}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
            </AccordionInner>
          </AccordionContainer>
        </InnerSection>
      </Section>
    </Container>
  )
};

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}: AccordionItemProps) =>{
  const navigate  = useNavigate();

  const handleNavigation = (href: string, arr: Array<ContentProps>, title: string) => {
    localStorage.removeItem("valueOne");
    localStorage.removeItem("valueTwo");
    navigate(href, { state: { content: arr, title } });
  };
  return   (
    <Fragment>
      {
        accordionContent.map(({ title, content, link, image }, i: number) => (
          <AccordionItem key={`accordion-item-${i}`}>
            <AccordionTitle
              onClick={() => {
                setCurrentAccordion(i);
                if(refs[i] && refs[i].current){
                  setBodyHeight(refs[i]?.current.clientHeight);
                }
              }}
            >
              <div style={{ display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                {title}
                <div onClick={() => handleNavigation(link, content, title)}>
                  <LinkIcon/>
                </div>
              </div>
            </AccordionTitle>
            <AccordionBody active={currentAccordion === i ? "true" : "false"} bodyheight={bodyHeight}>
              <AccordionContent ref={refs[i]}>
                {content.map((item: ContentProps, i: number) => (
                  <IndexList key={i} content={item} />
                ))}
              </AccordionContent>
            </AccordionBody>
          </AccordionItem>
        ))
      }
    </Fragment>
  )
};