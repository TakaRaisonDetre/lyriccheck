import React from "react";
import Tracks from "../tracks-api/Tracks";
import Search from "../tracks-api/search";

const Index = () => {
  return (
    <React.Fragment>
      <Search/>
      <Tracks />
    </React.Fragment>
  );
};
export default Index;
