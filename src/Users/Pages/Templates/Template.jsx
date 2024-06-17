import React, { useEffect } from "react";
import "./Style.css";
import { useParams } from "react-router-dom";
import TemplateOne from "./MainTemplates/TemplateOne";

function Template() {
  const { id } = useParams();
  useEffect(() => {}, []);
  return (
    <div className="outer-spacing mt-3">
      <TemplateOne />
    </div>
  );
}

export default Template;
