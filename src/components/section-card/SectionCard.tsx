
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {SectionCardProps, Content} from '@pages/topics/types';

type Arguments = { content: Content; title: string };

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
      <div className='information-filter'></div>
      <div className='information-top'></div>
      <div className='information-right'></div>
      <div className='information-bottom'></div>
      <div className='information-left'></div>
      <img src={image}/>
    </div>
  );
}