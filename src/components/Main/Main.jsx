import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGetAllProducts } from '../../store/slice/ProductsSlice';
import styles from './Main.module.css';
import ProductList from '../ProductList/ProductList';
import Form from '../Form/Form';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetAllProducts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.main_top}>
                <h1>Все кроссовки</h1>
                <Form />
            </div>
            <ProductList />
        </div>
    );
};

export default Main;