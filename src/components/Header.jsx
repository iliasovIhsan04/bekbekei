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
  const [isOpens, setIsOpens] = useState(false);
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;
  console.log(user);
  return (
    <div>
      <div className="nav">
        <div className="container nav_content">
          <FiUser className="fi" onClick={() => navigate("/dashboard")} />
          {token ? (
            <h2 className="first_last_name_header">
              Привет, {user.first_name} {user.last_name}
            </h2>
          ) : (
            <img src={bekbekei} alt="" />
          )}
          <BiBell className="fi" onClick={() => setIsOpens(true)} />
        </div>
      </div>
      {isOpens === true && (
        <div id="modal">
          <div className="nav">
            <div className="container d-flex justify-content-between align-items-center">
              <HiArrowLongLeft
                className="fi"
                onClick={() => setIsOpens(false)}
              />
              <h4 className="title_h5 all_title">Уведомление</h4>
              <div />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
