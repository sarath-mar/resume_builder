import React from "react";
import "../Dashboard/Style.css";

import TemplateCard from "./Components/TemplateCard";
function UsersDashboard() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="outer-spacing mt-5">
   
      <div className="template-card-outer">
        {array.map((x) => (
          <TemplateCard id={x} />
        ))}
      </div>
    </div>
  );
}

export default UsersDashboard;
