import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { HiArrowLongLeft, HiOutlineArrowsUpDown } from "react-icons/hi2";
import { BsBookmark, BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import "../style/css/modal.css";
import { url } from "../Api";
import Search from "./Search";
import Slider from "react-slider";

const MIN = 40;
const MAX = 500;
const ShopDetail = ({
  data,
  setData,
  saveToLocalStorage,
  handlePlus,
  handleMinus,
  calculateTabs,
}) => {
  const [tabs, setTabs] = useState([]);
  const { cat, name } = useParams();
  const [query, setQuery] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lastClicked, setLastClicked] = useState("dataClicks");
  const navigate = useNavigate();
  const [sub_cat, setSubCat] = useState(0);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState(false);
  const [filters, setFilters] = useState(false);
  const [search, setSearch] = useState(false);
  const [all, setAll] = useState(0);
  const [requests, setRequests] = useState({
    budget: [MIN, MAX],
  });
  const api = "product/list";
  useEffect(() => {
    axios
      .get(`${url}/${api}?cat=${cat}`)
      .then((response) => setData(response.data));
  }, []);
  const dataClick = async (dataID) => {
    try {
      const response = await axios.get(`${url}/${api}?cat=${dataID}`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
      setSearch(false);
    }
  };
  const fetchData = async (subCatId, selectedTitle) => {
    try {
      const response = await axios.get(`${url}/${api}?sub_cat=${subCatId}`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
      setSearch(false);
      setRequests({
        budget: [MIN, MAX],
      });
    }
  };
  const filtersData = async () => {
    try {
      const response = await axios.get(
        `${url}/${api}?pricefrom=${requests.budget[0]}&priceto=${requests.budget[1]}`
      );
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
      setSearch(false);
    }
  };

  const handleSearchButtonClick = async () => {
    try {
      const response = await axios.get(`${url}/${api}?search=${query}`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
      setSearch(false);
    }
  };
  const dataClicks = () => {
    setAll(cat);
    setSelectedIndex(tabs.findIndex((el) => el.id === cat));
    dataClick(cat);
    setLastClicked("dataClicks");
  };

  const handleTabClick = (selectedId) => {
    setSubCat(selectedId);
    setSelectedIndex(tabs.findIndex((el) => el.id === selectedId));
    fetchData(selectedId);
    setLastClicked("handleTabClick");
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    axios
      .get(url + `/product/sub-categories/${cat}`)
      .then((response) => {
        const categoryProducts = response.data;
        setTabs(categoryProducts);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [cat]);

  const handleTitleMinus = async () => {
    try {
      const response = await axios.get(`${url}/${api}?ordering=-title`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
    }
  };
  const handleTitle = async () => {
    try {
      const response = await axios.get(`${url}/${api}?ordering=title`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
    }
  };
  const handlePrice = async () => {
    try {
      const response = await axios.get(`${url}/${api}?ordering=price`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
    }
  };
  const handlePriceMinus = async () => {
    try {
      const response = await axios.get(`${url}/${api}?ordering=-price`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
    }
  };
  const handleSales = async () => {
    try {
      const response = await axios.get(`${url}/${api}?ordering=-sales`);
      const categoryProducts = response.data;
      setData(categoryProducts);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setFilters(false);
    }
  };

  return (
    <>
      <div id="modal">
        <div className="nav_line">
          <div>
            <div className="container d-flex justify-content-between align-items-center ner">
              <HiArrowLongLeft
                className="fi"
                onClick={() => navigate("/shop-all/shop")}
              />
              <h4 className="title_h5 all_title_one">
                {/*{data && data[0] && data[0].name}*/}
                Каталог, товары
              </h4>
              <BsSearch className="fi" onClick={() => setSearch(true)} />
            </div>
            <div
              style={{ padding: "18px", borderBottom: "0.5px solid #f4f4f4" }}
              className="container d-flex align-items-center scroll"
            >
              <div className="from_btn">
                <div
                  className={
                    lastClicked === "handleTabClick"
                      ? "btn_tabs"
                      : "btn_tabs_active"
                  }
                  onClick={dataClicks}
                >
                  Все
                </div>
              </div>
              {tabs.map((el, index) => (
                <div className="from_btn" key={el.id}>
                  <div
                    key={el.id}
                    className={
                      lastClicked === "dataClicks"
                        ? "btn_tabs"
                        : index === selectedIndex
                        ? "btn_tabs_active"
                        : "btn_tabs"
                    }
                    onClick={() => handleTabClick(el.id)}
                  >
                    {el.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="container">
              <div className="filter">
                <div
                  className="dnow d-flex align-items-center justify-content-center"
                  onClick={() => setFilters(true)}
                >
                  <FiFilter className="icons" />
                  <h6 className="title_one mt_one">Фильтр</h6>
                </div>
                <div className="dnow_one" />
                <div
                  className="dnow d-flex align-items-center justify-content-center"
                  onClick={() => setFilter(true)}
                >
                  <HiOutlineArrowsUpDown className="icons" />
                  <h6 className="title_one mt_one">Сортировка</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {search === true && (
          <div id="modal_one">
            <div className="nav">
              <div className="container d-flex justify-content-between align-items-center">
                <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
                <h4 className="title_h5 all_title">Поиск</h4>
                <div />
              </div>
            </div>
            <div className="container search_in">
              <input
                className="input_form_all mt-4"
                type="text"
                placeholder="Поиск..."
                value={query}
                onChange={handleInputChange}
              />
              <button
                className="search-button"
                onClick={handleSearchButtonClick}
              >
                Поиск
              </button>
            </div>
          </div>
        )}
        {filters === true && (
          <div id="modal_one">
            <div className="nav_line">
              <div className="">
                <div className=" d-flex justify-content-between align-items-center ner">
                  <HiArrowLongLeft
                    className="fi"
                    onClick={() => navigate(-1)}
                  />
                  <h4 className="title_h5 all_title_one">Сортировка</h4>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="container iner">
              <h3 className="title_h4 mt-5" style={{ color: "#000" }}>
                Цена
              </h3>
              <div className="renge mt-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="value">
                      <span className="values">{requests.budget[0]}</span>
                    </div>
                    <h6 className="title_h6 nava">От</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="value">
                      <span className="values"> {requests.budget[1]}</span>
                    </div>
                    <h6 className="title_h6 nava">До</h6>
                  </div>
                </div>
                <Slider
                  className="slider mt-4"
                  onChange={(newBudget) =>
                    setRequests({ ...requests, budget: newBudget })
                  }
                  value={requests.budget}
                  min={MIN}
                  max={MAX}
                />
              </div>
            </div>
            <div className="container">
              <button className="btn_button all_btn" onClick={filtersData}>
                Применить
              </button>
            </div>
          </div>
        )}
        <div className="container">
          <div className="row row_one">
            {data.map((el) => (
              <div className="col-6 mt-4" key={el.id}>
                <div
                  className="blocks"
                  onClick={() => navigate(`/shop-all/product/${el.id}`)}
                >
                  <img src={el.img} alt="" />
                  {/*{localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                  {/*    <div className='hover_blocks'>*/}
                  {/*        <h1>{mun[el.id]}</h1>*/}
                  {/*    </div> : ""}*/}
                </div>
                <div className="all">
                  <h3 className="title_one mt">{el.title}</h3>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <p className="project">
                      <span>1 {el.price_for}</span>
                    </p>
                    <h2>{el.price} сом</h2>
                  </div>
                </div>
                <div className="flex mt-2">
                  {/*<div className="marks">*/}
                  {/*    <BsBookmark*/}
                  {/*        className={localStorage.getItem(`activeItem_${el.id}`) === `active` ? 'active' : ''}*/}
                  {/*        onClick={() => saveToLocalStorage(el.id)}*/}
                  {/*    />*/}
                  {/*</div>*/}
                  {/*<div className={*/}
                  {/*    localStorage.getItem(`activePlus_${el.id}`) === `${el.id}`*/}
                  {/*        ? 'active_plus'*/}
                  {/*        : 'plus'*/}
                  {/*}>*/}
                  {/*    {*/}
                  {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                  {/*            <AiOutlineMinus*/}
                  {/*                className='fi_ones'*/}
                  {/*                onClick={() => handleMinus(el.id)}*/}
                  {/*            /> : ''*/}
                  {/*    }*/}
                  {/*    {*/}
                  {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                  {/*            (*/}
                  {/*                <p className="fi_ones">*/}
                  {/*                    <span key={el.id}>{mun[el.id]}</span>*/}
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
                  {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                  {/*            <AiOutlinePlus className='fi_ones'*/}
                  {/*                           onClick={() => handlePlus(el.id)}/>*/}
                  {/*            :*/}
                  {/*            <AiOutlinePlus className='fi ai_out'*/}
                  {/*                           onClick={() => handlePlus(el.id)}/>*/}
                  {/*    }*/}
                  {/*</div>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {data.map((el) => (
        <div>
          {filter === true && (
            <div className="filters_oll" onClick={() => setFilter(false)}>
              <div className="order" onClick={(e) => e.stopPropagation()}>
                <div className="container">
                  <div className="d-flex justify-content-between">
                    <h6 className="title_h3 orders">Сортировка</h6>
                  </div>
                  <div className="sort-wrap">
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      onClick={() => setFilter(false)}
                      type="checkbox"
                      value="yes"
                    />
                    <h6 className="title_one m-lg-2">По умолчение</h6>
                  </div>
                  <div className="sort-wrap" onClick={() => handleSales()}>
                    <input
                      id="popular-checkbox"
                      name="popular-sort"
                      type="checkbox"
                      value="yes"
                      onClick={() => setFilter(false)}
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="title_one m-lg-2"
                    >
                      Сначала популярные
                    </label>
                  </div>
                  <div
                    className="sort-wrap"
                    onClick={handlePrice || setFilter(false)}
                  >
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      value="yes"
                      onClick={() => setFilter(false)}
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="title_one m-lg-2"
                    >
                      Сначала дешевые
                    </label>
                  </div>
                  <div
                    className="sort-wrap"
                    onClick={handlePriceMinus || setFilter(false)}
                  >
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      value="yes"
                      onClick={() => setFilter(false)}
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="title_one m-lg-2"
                    >
                      Сначала дорогие
                    </label>
                  </div>
                  <div
                    className="sort-wrap"
                    onClick={handleTitle || setFilter(false)}
                  >
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      value="yes"
                      onClick={() => setFilter(false)}
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="title_one m-lg-2"
                    >
                      По алфавиту от А до Я
                    </label>
                  </div>
                  <div
                    className="sort-wrap"
                    onClick={handleTitleMinus || setFilter(false)}
                  >
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      value={el.title}
                      onClick={() => setFilter(false)}
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="title_one m-lg-2"
                    >
                      По алфавиту от Я до А
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ShopDetail;
