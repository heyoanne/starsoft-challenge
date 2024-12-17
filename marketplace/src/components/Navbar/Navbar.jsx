import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Overlay que escurece o fundo */}
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <div className={styles.cartMenu} onClick={toggleMenu}>
          <img src="/images/cart.png" alt="Cart" />
          <label className={styles.label}>01</label>
        </div>

        {/* Side menu */}
        <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.sidemenuHeader}>
            <button className={styles.closeButton} onClick={toggleMenu}>
              <img src="/images/arrow.png" alt="arrow" />
            </button>
            <label className={styles.midTitles}>Mochila de compras</label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
