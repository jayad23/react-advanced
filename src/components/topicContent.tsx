import parse from 'html-react-parser';
export interface TopicContentProps { definition: string; image?: string; urlLink?: string; title: string; }

export const TopicContent = (props: TopicContentProps) => {
  return (
    <div style={{ padding: "10px"}}>
      {parse(props.definition)}
    </div>
  )
};