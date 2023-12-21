import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import bekbekei from "../img/bekbekei-h-logo.svg";
import "../style/css/App.css";
import "../style/css/media.css";
import "../style/css/main.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;

  return (
    <div>
      <div className="nav navs_block">
        <div className="container nav_content">
          <FiUser
            className="fi"
            color="#fff"
            onClick={() => navigate("/dashboard")}
          />
          {token ? (
            <h2 className="first_last_name_header" style={{ color: "#fff" }}>
              Привет, {user.first_name} {user.last_name}
            </h2>
          ) : (
            <img src={bekbekei} alt="" />
          )}
          <BiBell
            className="fi"
            color="#fff"
            onClick={() => navigate("/notification")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
