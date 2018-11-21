import React from "react";
import { Link } from "react-router-dom";
import {
  thumb,
  flex,
  thumbName,
  thumbImg,
  thumbList,
  title
} from "../style/components/ideasList.css";

class IdeasList extends React.Component {
  state = {
    ideas: ["Avocado", "Chinese", "Healthy", "Dessert"]
  };
  render() {
    const list = this.state.ideas.map((idea, idx) => {
      const style = {
        backgroundImage: `url(./asset/${idea.toLowerCase()}.jpg)`
      };
      return (
        <Link key={idx} className={thumb} to={`/search/${idea.toLowerCase()}`}>
          <div className={flex}>
            <div className={thumbImg} style={style} />
            <div className={thumbName}>{idea}</div>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <h3 className={title}>Inspirations</h3>
        <div className={thumbList}>{list}</div>
      </div>
    );
  }
}

export default IdeasList;
