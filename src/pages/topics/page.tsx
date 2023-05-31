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
      <div>
        <a href="https://stackblitz.com/edit/react-jylspa?file=src%2FApp.js" target="_blank">
          <code>aquí podrás encontrar la compilación de todos los ejercicios que verás en este curso.</code>
        </a>
      </div>
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