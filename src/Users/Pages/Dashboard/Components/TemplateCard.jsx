import React from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function TemplateCard({id}) {
    const navigate=useNavigate()
  return (
    <div className="template-card">
      <h5>Card</h5>
      <span>Resume</span>
      <p>Card Contents</p>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
        odio deleniti aspernatur minus molestias velit. Accusamus aut
        consequatur, soluta vero doloribus, dicta deleniti quaerat voluptatem
        magnam esse error? Tempore!
      </h6>
      <Button onClick={()=>navigate(`/template/${id}`)} className="choose-template-button">Choose Template</Button>
    </div>
  );
}

export default TemplateCard;
