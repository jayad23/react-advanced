import {Fragment} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import {TopicContent, TopicContentProps} from '@components/topicContent';
import {CustomDevelopmentTitle, SecondIconContainer} from './styled';
import {useNavigate} from 'react-router-dom';

export interface DevelopmentProps {
  title: string;
  development: Array<TopicContentProps>
}

const Development = ({title, development }: DevelopmentProps) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <CustomDevelopmentTitle>{title}</CustomDevelopmentTitle>
      <SecondIconContainer onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </SecondIconContainer>
      {
        development.map((item: TopicContentProps, idx: number) => (
          <TopicContent key={idx} {...item} />
        ))
      }
    </Fragment>
  )
}

export default Development;