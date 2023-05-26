import { useState } from "react";
import { useLocation } from "react-router-dom";
import {TopicContent, TopicContentProps } from "@components/topicContent";
import "../shared.css";

interface Content extends TopicContentProps {
  title: string;
}

const Topic = () => {
  const { state: content } = useLocation();
  const [tab, setTab] = useState(JSON.parse(localStorage.getItem("tabSelected") as string) || { title: "", index: 0 });

  const handleTabSelected = (ttl: string, idx: number) => {
    localStorage.setItem("tabSelected", JSON.stringify({ title: ttl, index: idx }))
    setTab({ title: ttl, index: idx });
  };

  return (  
    <div style={{ backgroundColor: "#fff", padding: "20px", width: "900px", border: "2px solid #eee", borderRadius:"8px"}}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        {
          content.map((item: Content, idx: number) => (
            <div 
              key={idx} 
              style={{ padding: "5px", border: "1px solid #eee", cursor: "pointer", width:`${100/3}%`}}
              onClick={() => handleTabSelected(item.title, idx)}
            >
              {item.title}
            </div>
          ))
        }
      </div>
      {
        content[tab.index].development.map((topic: TopicContentProps) => (
          <TopicContent {...topic} />
        ))
      }
    </div>
  )
}

export default Topic;