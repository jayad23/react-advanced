import { useNavigate } from "react-router-dom";
import { Accordion } from "@components/accordion/Accordion";
//import { SectionCardProps } from "./types";
//import {SectionCard} from "@components/section-card/SectionCard";
import { AiOutlineHome } from "react-icons/ai";
import { CustomArticle, CustomSection, 
  //SectionCardContainer 
} from "./styled";
import "../shared.css";
import {topics} from "@topics/db";

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
      <Accordion data={topics} />
      {/* <SectionCardContainer>
        {
          topics.map((element:SectionCardProps, idx: number) => (
            <SectionCard key={idx} {...element} />
          ))
        }
      </SectionCardContainer> */}
    </CustomSection>
  )
}

export default Topics;