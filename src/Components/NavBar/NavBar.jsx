import React from 'react'
import styles from './NavBar.module.css'
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navV1X}>
            <Link to="/" style={{ display: "flex", alignItems: "center", columnGap: "20px", textDecoration: "none" }}>
                <img className={styles.imgX} src="https://res.cloudinary.com/dews3zbls/image/upload/v1678554971/logos/x_fzojqx.png" alt="" />
                <h3 className={styles.wordX}>Xtech</h3>
            </Link>
            <div className={styles.categoriesX}>
                <Link to="/category/tabletas" className={styles.link}>Tabletas</Link>
                <Link to="/category/laptops" className={styles.link}>Laptops</Link>
                <Link to="/category/smartphones" className={styles.link}>Smartphones</Link>
                <Link to="/category/auriculares" className={styles.link}>Auriculares</Link>
            </div>
            <Link to='/cart' style={{ color: "white" }}><CartWidget /></Link>
        </div>
    )
}

export default Navbar