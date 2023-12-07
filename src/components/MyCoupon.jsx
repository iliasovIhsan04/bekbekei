import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import burger from "../img/burger.jpg";
import or_cod from "../img/qr-код.gif";
import { useNavigate } from "react-router";
import shoro from "../img/shoro.jpg";
import "../style/css/main.css";
import "../style/css/App.css";

const coupon = [
  {
    id: 1,
    image: burger,
    skidka: "Только для вас! Скидка на кетчуп",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
  },
  {
    id: 2,
    image: shoro,
    skidka: "Только для вас! Скидка на шоро",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
  },
];

const MyCoupon = () => {
  const navigate = useNavigate();
  return (
    <div className="my_coupon">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h6 className="title_h6 navs_one">Менин купондорум</h6>
          <h4
            className="title_h4  display"
            onClick={() => navigate("/my-coupon-details")}
          >
            Бардыгы{" "}
            <MdOutlineKeyboardArrowRight
              style={{ cursor: "pointer" }}
              size={18}
            />
          </h4>
        </div>
        <div className="coupon_block_all">
          {coupon.map((el, id) => (
            <div
              key={id}
              className="coupon_box"
              onClick={() => navigate(`/my-coupon-details-id/${el.id}`)}
            >
              <div className="title_goods">
                <img src={el.image} alt="" />
              </div>
              <div className="text_box">
                <h3 className="title_h5 mt-4">{el.skidka}</h3>
                <div className="d-flex align-items-center">
                  <p className="title_h6 pro">{el.date}</p>
                  <div className="or_cod_little">
                    <img src={el.qr_cod} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCoupon;
