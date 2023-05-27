import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {TopicContentProps } from "@components/topicContent";
import EditorContainer from "./transitional";
import "../shared.css";

interface Content extends TopicContentProps {
  title: string;
}

interface StateProps { title: string; content: Content }

const Topic = () => {
  const { state: content }: { state: StateProps } = useLocation();

  return (  
    <div style={{ 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        justifyContent: "space-between", 
        overflow: "hidden"
      }}
    >
      <div style={{ 
        width: "50%", 
        padding: "10px", 
        overflow: "scroll", 
        borderRadius: "5px",
        borderRight: "1px solid #eee",
        backgroundColor: "#282C34",
        color: "rgba(255, 255, 255, 0.87)"
        }}
      >
        <h3>{content.title}</h3>
        <div style={{ textAlign: "left"}}>
          <p>{JSON.stringify(content)}</p>
        </div>
      </div>
      <EditorContainer />
    </div>
  )
}

export default Topic;

