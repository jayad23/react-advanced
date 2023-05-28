
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {SectionCardProps, Content} from '@pages/topics/types';

type Arguments = { content: Content; title: string };
const classNames = ["information-filter", "information-top", "information-right", "information-bottom", "information-left"];

export const SectionCard = ({ title, content, image, link }: SectionCardProps) => {
  const navigate  = useNavigate();

  const handleNavigation = (route:string, arr: Arguments) => {
    localStorage.removeItem("valueOne");
    localStorage.removeItem("valueTwo");
    navigate(route, { state: arr });
  };

  return (
    <div className='information-card' onClick={() => handleNavigation(link, {content, title })}>
      <div className='information-desc'><p>{title}</p></div>
      {
        classNames.map((cls: string) => (
          <div key={cls} className={cls}></div>
        ))
      }
      <img src={image}/>
    </div>
  );
}