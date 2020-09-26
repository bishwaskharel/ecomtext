import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

import {
  BehanceSquareOutlined,
  HeatMapOutlined,
  PercentageOutlined,
  SlackOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import "./CategoryDemo.styles.scss";

const CategoryDemo = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <div className="categoryDemo-bar">
      <div className="categoryDemo-inside">
        <div className="categoryDemo-items">
          <IconFont type="AreaChartOutlined" />
        </div>
        <div className="categoryDemo-items">
          <HeatMapOutlined />
        </div>
        <div className="categoryDemo-items">
          <WeiboCircleOutlined />
        </div>
        <div className="categoryDemo-items">
          <BehanceSquareOutlined />
        </div>
        <div className="categoryDemo-items">
          <SlackOutlined />
        </div>
        <div className="categoryDemo-items">
          <PercentageOutlined />
        </div>
      </div>
    </div>
  );
};

export default CategoryDemo;
