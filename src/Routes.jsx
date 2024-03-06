import React from "react";
import { useRoutes } from "react-router-dom";

import Frame from "pages/Frame";

const ProjectRoutes = () => {
  let element = useRoutes([
   
    {
      path: "frame",
      element: <Frame />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
