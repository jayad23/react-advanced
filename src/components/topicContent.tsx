export interface TopicContentProps { definition: string; image?: string; urlLink?: string;}

export const TopicContent = (props: TopicContentProps) => {
  return (
    <div style={{ border: "2px solid #eee", padding: "10px"}}>
      {JSON.stringify(props)}
    </div>
  )
};