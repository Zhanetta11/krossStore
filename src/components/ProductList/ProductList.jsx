import React from "react";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
    const { products } = useSelector(state => state.products);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {products?.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h2 className={styles.notFound}>Products are not found</h2>
                )}
            </div>
        </div>
    );
};

export default ProductList;
