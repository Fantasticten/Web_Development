import React from "react";
import styles from "../../../styles/components/private/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.path}>
          <span>Data Antrian</span>
        </div>
        <div className={styles.profile}>
          <span>Drg. Rima</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
