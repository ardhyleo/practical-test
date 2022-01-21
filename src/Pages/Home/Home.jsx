import React from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Button from "@mui/material/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { getDataStart } from "../../Store/Action/Action";
// import cardData from "./data";
const Home = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDataStart());
  //   console.log(dispatch, "tes");
  // }, [dispatch]);
  // const { dataJson } = useSelector((state) => state.dataReducer);
  // console.log(dataJson);

  return (
    <>
      <div>
        <h3>Search</h3>
        <div className={styles.create}>
          <h5>Create your data</h5>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button variant="contained">Create</Button>
          </Link>
        </div>
      </div>
      <Card />
      {/* {cardData.map((item) => (
        <Card id={item.id} image={item.image} category={item.category} title={item.title} title={item.title} stock={item.stock} price={item.price} />
      ))} */}
    </>
  );
};

export default Home;
