import React from "react";
import "./Style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function UserHeader() {
  // const navigate = useNavigate();
  const navigateToLoginPage = () => {
    // navigate("/login");
  };
  return (
    <div>
      <div className="UserDashboard-header">
        <span className="new">NEW!</span>
        <span className="hired-faster">
          Get hired faster with a resume review.
        </span>
      </div>
      <div className="header-login">
        <Button variant="outline-success" onClick={navigateToLoginPage}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default UserHeader;
