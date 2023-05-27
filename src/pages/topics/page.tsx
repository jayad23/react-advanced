import { useNavigate } from "react-router-dom";
import { SectionCardProps, topics } from "./types";
import {SectionCard} from "@components/section-card/SectionCard";
import { AiOutlineHome } from "react-icons/ai";
import { CustomArticle, CustomSection } from "./styled";
import "../shared.css";



const Topics = () => {
  const navigate = useNavigate();
  return (
    <CustomSection>
      <CustomArticle>
        <h2>Temario:</h2>
        <button onClick={() => navigate("/")}>
          <AiOutlineHome />
        </button>
      </CustomArticle>
      <article style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", alignItems: "flex-start"}}>
        {
          topics.map((element:SectionCardProps, idx: number) => (
            <SectionCard key={idx} {...element} />
          ))
        }
      </article>
    </CustomSection>
  )
}

export default Topics;