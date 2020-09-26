import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import React from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="sticky-outer-navbar">
      <div className="outer-navbar">
        <div className="inner-navbar">
          <div>
            <img
              src="https://www.gyapu.com/7384b02225d68a49b2c14c6b4008e49e.svg"
              alt="logo"
            />
          </div>
          <Search
            placeholder="Search Items"
            onSearch={(value) => console.log(value)}
            enterButton
            className="search"
          />

          <div>
            <ul>
              <li>
                <HeartOutlined />
                <span>Wishlist</span>
              </li>
              <li>
                <ShoppingCartOutlined />
                <span>Cart</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
