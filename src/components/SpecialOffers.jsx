import React, { useEffect } from "react";
import "../style/css/main.css";
import { useNavigate } from "react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/reduser/fetchData";

const SpecialOffers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.myData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="special_offers">
      <div className="container">
        <div className="title title_top">
          <p>Атайын сунуштар </p>
          <h4
            className="title_add"
            onClick={() => navigate("/special-details")}
          >
            Бардыгы
            <MdOutlineKeyboardArrowRight size={20} />
          </h4>
        </div>
        <div className="special_block_all">
          {data.map((el, id) => (
            <div
              key={id}
              onClick={() => navigate(`/get-shot-details-id/${el.id}`)}
              className="special_box special_details_box"
            >
              <div className="div_box">
                <img
                  className="special_image"
                  src={el.img}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
