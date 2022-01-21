import React from "react";
import styles from "./Footer.module.scss";
import { UitFacebookF } from "@iconscout/react-unicons-thinline";
import { UitTwitterAlt } from "@iconscout/react-unicons-thinline";
import { UilInstagram } from "@iconscout/react-unicons";
import { Uil21Plus } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.name}>
          <br />
          <h3 className={styles.title}>ardhyleo</h3>
          <br />
          <p className={styles.title}>
            Junior
            <br />
            Frontend
            <br />
            Developer
          </p>
        </div>
        <div className={styles.plus}>
          <Uil21Plus size="large" color="#394955" />
        </div>
        <div className={styles.icons}>
          <p className={styles.contact}>Contact me</p>
          <UitFacebookF className={styles.facebook} color="#394955" />
          <UitTwitterAlt className={styles.twitter} color="#394955" />
          <UilInstagram className={styles.instagram} color="#394955" />
        </div>
      </div>
    </>
  );
};

export default Footer;
