import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.tagContainer}>Ardiyansyah Eka Saputra</div>
      <div className={styles.buttonContainer}>
        {/* <ul className={styles.listButton}>
          <li className={styles.list}>Home</li>
          <li className={styles.list}>About</li>
          <li className={styles.list}>Authorized</li>
          <li className={styles.list}>Contact Me</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
