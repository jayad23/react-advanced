
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {SectionCardProps, Content} from '@pages/topics/types';

export const SectionCard = ({ title, content, image, link }: SectionCardProps) => {
  const navigate  = useNavigate();

  const handleNavigation = (route:string, arr: Content) => {
    navigate(route, { state: arr });
  };

  return (
    <div className='information-card' onClick={() => handleNavigation(link, content)}>
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