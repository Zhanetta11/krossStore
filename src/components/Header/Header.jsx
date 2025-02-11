import React from 'react';

import styles from './Header.module.css'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="KROSS STORE" className={styles.logoImage} />
                <div className={styles.logo_text}>
                    <h2 className={styles.title}>KROSS STORE</h2>
                    <p className={styles.subtitle}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.cart}>
                    <LocalGroceryStoreOutlinedIcon className={styles.icon} />
                    <span>1205 руб.</span>
                </div>
                <div className={styles.cart}>
                    <FavoriteBorderOutlinedIcon className={styles.icon} />
                </div>
                <div className={styles.profile}>
                    <AccountCircleOutlinedIcon className={styles.icon} />
                    <span>Профиль</span>
                </div>
            </div>
        </header>
    );
};

export default Header;