import React from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  return (
    <div className="panelDiv">
      <div className="contentsWrapper">
        <div className="topArrangement">{header}</div>
        <div>
          <GoChevronLeft />
        </div>
      </div>

      {children}
    </div>
  );
}

export default ExpandablePanel;
