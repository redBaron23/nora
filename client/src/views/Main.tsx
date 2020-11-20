import React from "react";
import { Gallery } from "../hooks/Gallery"
import { withSideBar } from "../hooks/withSideBar"





interface Props {
}

const Main: React.FC<Props> = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};
export default withSideBar(Main);
