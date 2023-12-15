import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../style/css/App.css";
import "../style/css/main.css";
import "../style/css/modal.css";
import { url } from "../Api";

const Product = ({ saveToLocalStorage, handlePlus, plus, handleMinus }) => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url + `/product/detail/${id}`)
      .then((response) => setDatas(response.data))
      .catch();
  }, [id]);
  const mun = JSON.parse(localStorage.getItem("plus"));
  return (
    <div id="modal">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <h4 className="title_h5 all_title_one">Товар</h4>
          <div />
          <div />
        </div>
      </div>
      <div className="container">
        <div className="block_shop">
          <div className="blocks">
            <img className="date_img" src={datas.img} alt="" />
          </div>
          <h3 className="product_title">{datas.title}</h3>
          <div className="all_alls">
            <div className="code">
              <p className="project_product">АРТ: {datas.code}</p>
              <p className="project_product">
                <span>{datas.pack}</span>
              </p>
            </div>
            <div className="flex">
              {/*<div className={*/}
              {/*    localStorage.getItem(`activePlus_${datas.id}`) === `${datas.id}`*/}
              {/*        ? 'active_plus'*/}
              {/*        : 'plus'*/}
              {/*}>*/}
              {/*    {*/}
              {/*        localStorage.getItem(`activePlus_${datas.id}`) === `${datas.id}` ?*/}
              {/*            <AiOutlineMinus*/}
              {/*                className='fi_ones'*/}
              {/*                onClick={() => handleMinus(datas.id)}*/}
              {/*            /> : ''*/}
              {/*    }*/}
              {/*    {*/}
              {/*        localStorage.getItem(`activePlus_${datas.id}`) === `${datas.id}` ?*/}
              {/*            (*/}
              {/*                <p className="fi_ones">*/}
              {/*                    <span key={datas.id}>{mun[datas.id]}</span>*/}
              {/*                    <span>шт</span>*/}
              {/*                </p>*/}
              {/*            ) :*/}
              {/*            (*/}
              {/*                <p className='title_one font'>*/}
              {/*                    Кошуу*/}
              {/*                </p>*/}
              {/*            )*/}
              {/*    }*/}
              {/*    {*/}
              {/*        localStorage.getItem(`activePlus_${datas.id}`) === `${datas.id}` ?*/}
              {/*            <AiOutlinePlus className='fi_ones' onClick={() => handlePlus(datas.id)}/>*/}
              {/*            :*/}
              {/*            <AiOutlinePlus className='fi ai_out' onClick={() => handlePlus(datas.id)}/>*/}
              {/*    }*/}
              {/*</div>*/}

              {/*{*/}
              {/*    (plus[datas.id] || 0) === 0 ? "" :*/}
              {/*        <div className="container">*/}
              {/*            <button className="btn_button" onClick={() => navigate("/shop-all/basket")}>*/}
              {/*                {plus[datas.id]} - {plus[datas.id] * datas.price}*/}
              {/*            </button>*/}
              {/*        </div>*/}
              {/*}*/}
            </div>
          </div>
          <div className="all_alls">
            <p className="project_product">Цена</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="price_data">{datas.price} сом</span>
              <span className="old_price old_price_one">
                {datas.old_price}
                {datas.old_price === null ? "" : "  сом"}
              </span>
            </div>
            {/*<div className="marks main_left">*/}
            {/*    <BsBookmark*/}
            {/*        className={*/}
            {/*            localStorage.getItem(`activeItem_${datas.id}`) === `active`*/}
            {/*                ? 'active'*/}
            {/*                : ''*/}
            {/*        }*/}
            {/*        onClick={() => saveToLocalStorage(datas.id)}*/}
            {/*    />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
