import React from "react";
import ItemsListContainer from "./ItemsListContainer";
import IdeasList from "./IdeasList";

const Home = () => {
  return (
    <div>
      <div className="container">
        <IdeasList />
        <ItemsListContainer />
      </div>
    </div>
  );
};
export default Home;
