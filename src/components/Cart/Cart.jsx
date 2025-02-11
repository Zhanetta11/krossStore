import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slice/CartSlice";
import styles from "./Cart.module.css";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import emptyCartImage from "../../assets/img/cart.svg";

const Cart = ({ onClose }) => {
    const { cartItems, totalPrice, tax } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Корзина</h2>

            {cartItems.length > 0 ? (
                <>
                    <div className={styles.items}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.images[0]} alt={item.title} className={styles.image} />
                                <div className={styles.info}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <p className={styles.price}>{item.price} руб.</p>
                                    <p className={styles.price}>Количество: {item.quantity}</p>
                                </div>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summary}>
                        <p className={styles.total}>Итого: <span>{totalPrice} руб.</span></p>
                        <p className={styles.tax}>Налог 5%: <span>{tax.toFixed(2)} руб.</span></p>
                        <button className={styles.checkoutButton}>Оформить заказ</button>
                    </div>
                </>
            ) : (
                <div className={styles.emptyCart}>
                    <img src={emptyCartImage} alt="Пустая корзина" />
                    <h3>Корзина пустая</h3>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button className={styles.back} onClick={onClose}>
                        <ArrowBackIcon />
                        Вернуться назад
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;