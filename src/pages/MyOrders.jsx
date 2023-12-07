import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { TbCalendar } from "react-icons/tb";
import icons from "../img/39ecb5044ff738dd9a74c9174b026b8e.jpg";

const MyOrders = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="my_orders">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <p className="header_name">Mенин буюртмаларым</p>
            <TbCalendar className="fi" />
          </div>
        </div>
        <div className="container">
          <div className="ionic ionic_block">
            <div className="ionic_box1">
              <img src={icons} alt="" />
              <h3>Бул жер азырынча бош</h3>
              <p>Бул жерде сиз буюртма берген товарлар көрсөтүлөт</p>
            </div>
            <button className="ionic_button">
              <h5 className="ionic_button_text">Тарыхты көрсөтүү</h5>
              <p className="ionic_button_date">
                01.10.2023 дан 31.10.2023 чейин
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
