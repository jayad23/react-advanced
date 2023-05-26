import { useNavigate } from "react-router-dom";
import { SectionCardProps, topics } from "./types";
import {SectionCard} from "@components/section-card/SectionCard";
import { AiOutlineHome } from "react-icons/ai";
import "../shared.css";
import {Fragment} from "react";



const Topics = () => {
  const navigate = useNavigate();
  return (
    <section>
      <article style={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", gap: "10px"}}>
        <h2>Temario:</h2>
        <button onClick={() => navigate("/")}>
          <AiOutlineHome />
        </button>
      </article>
      <article style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", alignItems: "flex-start"}}>
        {
          topics.map((element:SectionCardProps, idx: number) => (
            <SectionCard key={idx} {...element} />
          ))
        }
      </article>
    </section>
  )
}

export default Topics;