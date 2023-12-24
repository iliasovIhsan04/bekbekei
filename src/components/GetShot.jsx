import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import "../style/css/main.css";
import { fetchData } from "../Redux/reduser/fetchData";

const GetShot = ({ token }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.myData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      {token ? (
        <div className="get_shot">
          <div className="container">
            <div className="title">
              <p className="text">Успей купить</p>
              <h4
                className="title_add"
                onClick={() => navigate("/get-shot-details")}
              ></h4>
            </div>
            <div className="get_block_all_block">
              {data.map((el, id) => (
                <div
                  key={id}
                  onClick={() => navigate(`/get-shot-details-id/${el.id}`)}
                  className="special_box_blok"
                >
                  <div className="div_box special_details_box">
                    <img
                      className="special_image_block"
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
      ) : (
        ""
      )}
    </>
  );
};

export default GetShot;
