import {ContentProps} from "./types";

const IndexList = ({ content }: { content: ContentProps}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <ul style={{ marginLeft: "30px", textAlign:"left" }}>
        <li>{content.title}</li>
      </ul>
    </div>
  )
}

export default IndexList