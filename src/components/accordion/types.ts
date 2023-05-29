import {Dispatch,  RefObject} from "react";
export type ContentProps = { development: Array<{ definition: string; image?: string; linkUrl?: string}>, title: string};
export interface AccordionDataProps {
  title: string;
  content: Array<ContentProps>;
  link: string;
  image: string;
}

export interface AccordionItemProps {
  accordionContent: Array<AccordionDataProps>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refs: RefObject<HTMLUListElement | any>[];
  currentAccordion: number;
  setCurrentAccordion: Dispatch<React.SetStateAction<number>>;
  setBodyHeight: Dispatch<React.SetStateAction<number>>;
  bodyHeight: number;
}