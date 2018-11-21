import React from "react";
import { thumb } from "../style/components/ideasList.css";

class IdeasList extends React.Component {
  state = {
    ideas: ["avocado", "noddle", "healty", "dessert"]
  };
  render() {
    return this.state.ideas.map((idea, idx) => (
      <div key={idx} className={thumb}>
        <img src={require("../asset/healthy.jpg")} alt="" height="100" />
        <div>{idea}</div>
      </div>
    ));
  }
}

export default IdeasList;
