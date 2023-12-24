import React, { useEffect, useState } from "react";
import "../style/css/main.css";
import "../style/css/App.css";
import qar from "../img/qr-код.gif";
import Header from "./Header";
import MyCoupon from "./MyCoupon";
import { useNavigate } from "react-router";
import { DiVisualstudio } from "react-icons/di";
import Storis from "../Storis/Storis";
import GetShot from "./GetShot";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import classNames from "classnames";
import logo from "../img/bekbekei-logotip.png";
import ReactPullToRefresh from "react-pull-to-refresh";
import NewPromotions from "../pages/NewPromotions";

const Main = ({ user }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;
  console.log(user);

  const handleRefresh = () => {
    window.location.reload(user);
  };

  return (
    <ReactPullToRefresh onRefresh={handleRefresh}>
      <div className="main-block">
        <Header user={user} />
        <div className="margin_top">
          <div className="container">
            <Storis token={token} />
          </div>
        </div>
        {/* <SwipeableBottomSheet overflowHeight={574}> */}
        <div className="swiper">
          <div className="container">
            {token ? (
              <div style={{ padding: "20px 0 0 0" }}>
                <div className="margin_top_all">
                  <div className="margin_top_log">
                    <DiVisualstudio className="dio" />
                    <img src={logo} alt="" className="dio" />
                  </div>
                </div>
                <div
                  className="bonus_block_all"
                  onClick={() => navigate("/qr-cod")}
                >
                  <div>
                    <h4 className="title_h">Бонусная карта</h4>
                    <h1 className="title_ha">
                      {user.bonus}
                      <span>бонусов</span>
                    </h1>
                  </div>
                  <div className="bonus_img">
                    <img src={user.qrimg} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <GetShot token={token} user={user} />
          <NewPromotions />
          {/* <MyCoupon />   */}
        </div>
        {/* </SwipeableBottomSheet> */}
      </div>
    </ReactPullToRefresh>
  );
};

export default Main;
