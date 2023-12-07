import React from "react";
import { AiOutlineHome, AiOutlineQrcode } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { LuBadgePercent } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "../style/css/main.css";
import qrCode from "../img/qrcode-svgrepo-com.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="nav_footer">
        <div className="flex_block">
          <NavLink exact to="/" activeClassName="active">
            <AiOutlineHome className="fi ai" />
            <span>Главная</span>
          </NavLink>
        </div>
        <div className="flex_block">
          <NavLink to="/shop-all/shop" activeClassName="active">
            <BsShop className="fi ai" />
            <span>Магазин</span>
          </NavLink>
        </div>
        <div className="flex_block">
          <NavLink to="/qr-cod" activeClassName="active">
            <AiOutlineQrcode className="fi  code" />
            <span className="spamn">Моя карта</span>
          </NavLink>
        </div>
        <div className="flex_block">
          <NavLink to="/promotion" activeClassName="active">
            <LuBadgePercent className="fi ai" />
            <span>Акции</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
