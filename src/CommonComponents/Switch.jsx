import React from "react";
import "./Styles/Switch.css";
function Switch({ onChange, label, checked }) {
  return (
    <div>
      <label className="toggle">
        <input
          onChange={onChange}
          className="toggle-checkbox"
          type="checkbox"
          checked={checked}
        />
        <div className="toggle-switch"></div>
        {label && <span className="toggle-label">{label}</span>}
      </label>
    </div>
  );
}

export default Switch;
