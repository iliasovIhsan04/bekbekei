import React from "react";
import "../style/css/main.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import promotionkg from "../../src/img/promotionkg.jpg";
import kola from "../../src/img/kola.jpg";
import manty from "../../src/img/manty.jpg";
import globus from "../../src/img/globus.jpg";
import hleb from "../../src/img/hleb.jpg";

const recoment = [
  {
    id: 1,
    image: kola,
  },
  {
    id: 2,
    image: promotionkg,
  },
  {
    id: 3,
    image: hleb,
  },
  {
    id: 4,
    image: globus,
  },
  {
    id: 5,
    image: hleb,
  },
];

const SpecialDetails = () => {
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="special_details">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft
              className="fi"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/promotion")}
              size={20}
            />
            <p className="header_name">Бардык сунуштар</p>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="special_details_block_all top_all">
            {recoment.map((el, id) => (
              <div
                key={id}
                onClick={() => navigate(`/special-details-id/${el.id}`)}
                className="special_details_box"
              >
                <img className="special_image" src={el.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDetails;
