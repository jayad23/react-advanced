//import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import {TopicContentProps } from "@components/topicContent";
import {DefinitionContainer, PageContainer, StickyTitle} from "./styled";
import EditorContainer from "./transitional";
import Development from "./development";
import "../shared.css";

interface Content {
  title: string;
  development: Array<TopicContentProps>;
}

interface StateProps { title: string; content: Array<Content> }

const Topic = () => {
  const { state: content }: { state: StateProps } = useLocation();
  const development = content.content;

  return (  
    <PageContainer>
      <DefinitionContainer>
        <StickyTitle>{content.title}</StickyTitle>
        <div style={{ textAlign: "left"}}>
          {
            development.map((lesson: Content, idx: number) => (
              <Development key={idx} {...lesson} />
            ))
          }
        </div>
      </DefinitionContainer>
      <EditorContainer />
    </PageContainer>
  )
}

export default Topic;

