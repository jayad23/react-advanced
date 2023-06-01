import {ContentProps} from "./types";
import parse from 'html-react-parser';

const IndexList = ({ content }: { content: ContentProps}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <ul style={{ marginLeft: "30px", textAlign:"left" }}>
        <li>{parse(content.title)}</li>
      </ul>
    </div>
  )
}

export default IndexList