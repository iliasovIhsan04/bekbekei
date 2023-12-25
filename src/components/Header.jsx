import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import bekbekei from "../img/bekbekei-h-logo.svg";
import "../style/css/App.css";
import "../style/css/media.css";
import "../style/css/main.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Redux/reduser/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;

  const data = useSelector((state) => state.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(auth());
      } catch (error) {
        console.error("Ошибка инициализации PullToRefresh:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log(data);

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
              Привет, {data && data.user.first_name}{" "}
              {data && data.user.last_name}
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
