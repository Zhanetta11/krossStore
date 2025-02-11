import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slice/CartSlice";

const ProductCard = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        const productInCart = cartItems.find(item => item.id === product.id);
        setIsAdded(!!productInCart);
    }, [cartItems, product.id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setIsAdded(true);
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
        setIsAdded(false);
    };

    return (
        <div className={styles.card}>
            <FavoriteBorderOutlinedIcon className={styles.favorite} />
            <img
                src={product.images[0]}
                alt={product.title}
                className={styles.image}
                style={{ width: "113px", height: "112px" }}
            />
            <h3 className={styles.name}>{product.title}</h3>
            <div className={styles.card_bottom}>
                <div className={styles.card_price}>
                    <p className={styles.price}>Цена:</p>
                    <p className={styles.price_name}>{product.price}</p>
                </div>
                <button
                    className={isAdded ? styles.addedButton : styles.addButton}
                    onClick={isAdded ? handleRemoveFromCart : handleAddToCart}
                    disabled={isAdded}
                >
                    {isAdded ? <DoneIcon /> : <AddIcon />}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;