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
import axios from "axios";
import { url } from "../Api";
import { auth } from "../Redux/reduser/auth";
import { useDispatch, useSelector } from "react-redux";
import LoadingPullTo from "../UI/LoadingPullTo/LoadingPullTo";

const Main = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;
  console.log(user);
  const [local, setLocal] = useState(localStorage.getItem("tokens"));
  const headers = {
    Authorization: `Token ${local}`,
  };
  const data = useSelector((state) => state.users);

  const initPullToRefresh = async () => {
    try {
      await dispatch(auth());
    } catch (error) {
      console.error("Ошибка инициализации PullToRefresh:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    initPullToRefresh();
  }, [dispatch]);

  useEffect(() => {
    if (refreshing) {
      initPullToRefresh();
    }
  }, [refreshing]);

  const handleRefresh = () => {
    setRefreshing(true);
  };

  return (
    <div className="main-block">
      <Header user={user} />
      <ReactPullToRefresh onRefresh={handleRefresh}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingPullTo />
        </div>
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
                      {data.user.bonus}
                      <span>бонусов</span>
                    </h1>
                  </div>
                  <div className="bonus_img">
                    <img src={data.user.qrimg} alt="" />
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
      </ReactPullToRefresh>
    </div>
  );
};

export default Main;
