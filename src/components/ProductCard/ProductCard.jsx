import React from "react";
import styles from "./ProductCard.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <FavoriteBorderOutlinedIcon className={styles.favorite} />
            <img src={product.images[0]} alt={product.title} className={styles.image} />
            <h3 className={styles.name}>{product.title}</h3>
            <div className={styles.card_bottom}>
                <div className={styles.card_price}>
                    <p className={styles.price}>Цена:</p>
                    <p className={styles.price_name}>{product.price}</p>
                </div>
                <button className={styles.addButton}>
                    <AddIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
