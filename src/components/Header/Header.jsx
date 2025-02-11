import React, { useState } from 'react';
import styles from './Header.module.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../../assets/img/logo.svg';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="KROSS STORE" className={styles.logoImage} />
                    <div className={styles.logo_text}>
                        <h2 className={styles.title}>KROSS STORE</h2>
                        <p className={styles.subtitle}>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.cart} onClick={() => setIsCartOpen(true)}>
                        <LocalGroceryStoreOutlinedIcon className={styles.icon} />
                        <span>{totalPrice} руб.</span>
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

            {isCartOpen && <div className={styles.overlay} onClick={() => setIsCartOpen(false)}></div>}

            {isCartOpen && (
                <div className={styles.cartWrapper}>
                    <Cart onClose={() => setIsCartOpen(false)} />
                </div>
            )}
        </>
    );
};

export default Header