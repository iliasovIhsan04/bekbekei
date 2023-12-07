import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      {" "}
      <div className="delivery_address">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft onClick={() => navigate(-1)} className="fi" />
            <p className="header_name">Адрес доставки</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="delivery_block">
            <div
              className="address_add"
              onClick={() => navigate("/new-address")}
            >
              <h6>Адрес доставки</h6>
              <p className="add_block">
                <span className="add">+ </span> Добавить
              </p>
            </div>
            <div className="page_empty">
              <h2>Здесь пока пусто</h2>
              <p>Здесь будут храниться ваши адреса</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
