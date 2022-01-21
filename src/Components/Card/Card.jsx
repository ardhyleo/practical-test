import React from "react";
import image from "./assets/nike.jpg";
import style from "./Card.module.scss";
// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";

const Card = () => {
  return (
    <>
      <div className={style.Card}>
        <div className={style.picture}>
          <img src={image} alt="images" className={style.img} />
        </div>
        <div className={style.describe}>
          <button className={style.category}>Tshirt</button>
          <h3 className={style.title}>Baju Niken</h3>
          <p className={style.price}>Harga</p>
          <p className={style.number}>100000</p>
          <p className={style.stock}>Stok Barang</p>
          <p className={style.number}>100</p>
        </div>
      </div>
    </>
  );
};

export default Card;
