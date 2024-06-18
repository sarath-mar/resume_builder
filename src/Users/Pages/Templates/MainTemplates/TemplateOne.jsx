import React, { useEffect, useRef, useState } from "react";
import TemplateHeader from "../Components/TemplateHeader";
import { Col, Row } from "react-bootstrap";
function TemplateOne() {
  const tBgImage = "https://app.enhancv.com/images/09-8e662724fe388838f317.png";

  const [templateDetails, setTemplateDetails] = useState({
    name: "",
    role: "",
    contactDetails: [{}],
  });

  const availableSection = {
    HEADER: "HEADER",
  };

  const [editSection, setEditSection] = useState("");
  const onEditSectionClick = (section) => {
    setEditSection(section);
  };
  const changeTemplateDetails = (e) => {
    setTemplateDetails((preVal) => {
      return { ...preVal, [e.target.name]: e.target.value };
    });
  };
  const handleParentClick = (event) => {
    // event.target gives us the element that was clicked
    // event.currentTarget gives us the element that the event listener is attached to
    if (event.target === event.currentTarget) {
      setEditSection("");
    }
  };
  return (
    <div
      style={{
        background: `url(${tBgImage})`,
        //  backgroundImage: `url(${tBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundColor:"red"
      }}
      className={`template-main py-4 px-4 ${
        editSection ? "t-section-remaining-edit" : ""
      } `}
      onClick={handleParentClick}
    >
      <div>
        <TemplateHeader
          isEdit={editSection === availableSection.HEADER}
          onEditSectionClick={onEditSectionClick}
          templateDetails={templateDetails}
          availableSection={availableSection}
          changeTemplateDetails={changeTemplateDetails}
        />
        <Row>
          <Col xs='8'>1</Col>
          <Col xs="4">2</Col>
        </Row>
        {/* <div ref={componentOne}></div>
        <div ref={componentTwo}></div> */}
      </div>
    </div>
  );
}
export default TemplateOne;
