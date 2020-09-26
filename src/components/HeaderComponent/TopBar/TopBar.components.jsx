import React from "react";
import "./TopBar.styles.scss";
import { MobileTwoTone, PhoneTwoTone } from "@ant-design/icons";

const TopBar = () => {
  return (
    <div className="topbar-head">
      <div className="topbar">
        <ul>
          <span>
            <MobileTwoTone />
            <span>9867126941</span>
          </span>
          <span>
            <PhoneTwoTone />
            <span>9847026001</span>
          </span>
        </ul>
        <ul>
          <span>Become Vendor</span>

          <span>Be Affilate</span>

          <span>Job</span>

          <span>Sell Your Product</span>

          <span>Account</span>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
