import {Fragment} from 'react'
//import parse from 'html-react-parser';
import {TopicContent, TopicContentProps} from '@components/topicContent';
import {CustomDevelopmentTitle} from './styled';

export interface DevelopmentProps {
  title: string;
  development: Array<TopicContentProps>
}

const Development = ({title, development }: DevelopmentProps) => {
  return (
    <Fragment>
      <CustomDevelopmentTitle>{title}</CustomDevelopmentTitle>
      {
        development.map((item: TopicContentProps, idx: number) => (
          <TopicContent key={idx} {...item} />
        ))
      }
    </Fragment>
  )
}

export default Development;