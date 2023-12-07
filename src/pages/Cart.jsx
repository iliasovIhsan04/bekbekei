import React from 'react';
import {HiArrowLongLeft} from "react-icons/hi2";
import {BsBookmark} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import icons from "../img/39ecb5044ff738dd9a74c9174b026b8e.jpg"

const Cart = ({saveToLocalStorage, handlePlus, plus, handleMinus}) => {
    const navigate = useNavigate()
    const plusCartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const mun = JSON.parse(localStorage.getItem('plus'));
    return (
        <div>
            <>
                <div id="modal">
                    <div className="nav">
                        <div className="container d-flex justify-content-between align-items-center">
                            <HiArrowLongLeft className="fi" onClick={() => navigate("/dashboard")}/>
                            <h4 className="title_h5 all_title_one">
                                Тандалган таварлар
                            </h4>
                        </div>
                    </div>
                    {
                        plusCartFromLocalStorage && plusCartFromLocalStorage.length > 0 ? (
                            <div className="container">
                                <div className="row mt-5">
                                    {plusCartFromLocalStorage.map((el) => (
                                        <div className="col-6 mt-4" key={el.id}>
                                            <div
                                                className="blocks"
                                                onClick={() => navigate(`/shop-all/product/${el.id}`)}
                                            >
                                                <img src={el.img} alt=""/>
                                                {
                                                    localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?
                                                        <div className='hover_blocks'>
                                                            <h1>{mun[el.id]}</h1>
                                                        </div> : ""
                                                }
                                            </div>
                                            <div className="all">
                                                <h3 className="title_one mt">{el.title}</h3>
                                                <div
                                                    className="d-flex align-items-center  justify-content-between mt-2">
                                                    <p className="project">
                                                        <span>{el.price_for} шт </span>
                                                    </p>
                                                    <h2>{el.price} сом</h2>
                                                    <div className="marks">
                                                        <BsBookmark
                                                            className={
                                                                localStorage.getItem(`activeItem_${el.id}`) === `active` ? 'active' : ''
                                                            }
                                                            onClick={() => saveToLocalStorage(el.id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div className="flex mt-2">*/}
                                            {/*    <div className={*/}
                                            {/*        localStorage.getItem(`activePlus_${el.id}`) === `${el.id}`*/}
                                            {/*            ? 'active_plus'*/}
                                            {/*            : 'plus'*/}
                                            {/*    }>*/}
                                            {/*        {*/}
                                            {/*            localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                            {/*                <AiOutlineMinus*/}
                                            {/*                    className='fi_ones'*/}
                                            {/*                    onClick={() => handleMinus(el.id)}*/}
                                            {/*                /> : ''*/}
                                            {/*        }*/}
                                            {/*        {*/}
                                            {/*            localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                            {/*                (*/}
                                            {/*                    <p className="fi_ones">*/}
                                            {/*                        <span key={el.id}>{mun[el.id]}</span>*/}
                                            {/*                        <span>шт</span>*/}
                                            {/*                    </p>*/}
                                            {/*                ) :*/}
                                            {/*                (*/}
                                            {/*                    <p className='title_one font'>*/}
                                            {/*                        Кошуу*/}
                                            {/*                    </p>*/}
                                            {/*                )*/}
                                            {/*        }*/}
                                            {/*        {*/}
                                            {/*            localStorage.getItem(`activePlus_${el.id}`) === `${el.id}` ?*/}
                                            {/*                <AiOutlinePlus className='fi_ones'*/}
                                            {/*                               onClick={() => handlePlus(el.id)}/>*/}
                                            {/*                :*/}
                                            {/*                <AiOutlinePlus className='fi ai_out'*/}
                                            {/*                               onClick={() => handlePlus(el.id)}/>*/}
                                            {/*        }*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*{*/}
                                            {/*    (plus[el.id] || 0) === 0 ? "" :*/}
                                            {/*        <div className="container">*/}
                                            {/*            <button className="btn_button"*/}
                                            {/*                    onClick={() => navigate("/shop-all/basket")}>*/}
                                            {/*                {plus[el.id]} - {plus[el.id] * el.price}*/}
                                            {/*            </button>*/}
                                            {/*        </div>*/}
                                            {/*}*/}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="ionic">
                                <img src={icons} alt=""/>
                                <h3>Бул жер азырынча бош</h3>
                                <p>Бул жер дукондогу белгиленген <br/> товарлар корсотулор</p>
                            </div>
                        )
                    }
                </div>
            </>
        </div>
    );
};

export default Cart;