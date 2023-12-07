import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

const NewAddress = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="new_address">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft onClick={() => navigate(-1)} className="fi" />
            <p className="header_name">Адрес доставки</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <form className="input_block new_block">
            <div className="input_box">
              <label>
                Город <span>*</span>
              </label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>
                Улица <span>*</span>{" "}
              </label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>
                Дом <span>*</span>
              </label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Корпус</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Подьезд</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Этаж</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Квартира</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <button className="new_button">Сохранить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAddress;
