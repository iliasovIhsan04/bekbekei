import React from "react";
import "../style/css/main.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import burger from "../img/burger.jpg";
import shoro from "../img/shoro.jpg";
import or_cod from "../img/qr-код.gif";

const coupon = [
  {
    id: 1,
    image: burger,
    skidka: "Только для вас! Скидка на кетчуп",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
    karta_number: 2222606042004,
    goods: "кетчуп 250гг",
    price: "170 сом",
  },
  {
    id: 2,
    image: shoro,
    skidka: "Только для вас! Скидка на шоро",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
    goods: "шоро 1л",
    karta_number: 222260875214,
    goods: "шоро 1л ",
    price: "70сом",
  },
];

const MyCouponDetailsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="my_coupon_details_id">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <span></span>
            <p className="header_name">Купон</p>
            <IoMdClose
              onClick={() => navigate(-1)}
              className="icons"
              style={{ cursor: "pointer" }}
              size={20}
            />
          </div>
        </div>
        <div className="container">
          <div className=" coupon_details">
            {coupon.map((el) =>
              el.id == id ? (
                <>
                  <div className="coupon_box">
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
                  <div className="coupon_number">
                    <p>Купондун номери</p>
                    <h4 className="c_number">{el.karta_number}</h4>
                  </div>
                  <h4 className="goods">Акцияга катышкан товарлар</h4>
                  <div className="goods_order">
                    <p>1.{el.goods}</p>
                    <span>{el.price}</span>
                  </div>
                  <div className="conditions">
                    Купонду 1жолу гана колдонууга болот Арзандатуу башка
                    сунуштар менен эсептелбейт.
                  </div>
                  <div className="qr_cod_block">
                    <img src={el.qr_cod} alt="" />
                  </div>
                </>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCouponDetailsId;
