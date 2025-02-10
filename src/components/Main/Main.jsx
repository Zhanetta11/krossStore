import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllProducts } from '../../store/slice/ProductsSlice';

const Main = () => {

    const { products } = useSelector(state => state.products)
    console.log(products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGetAllProducts())
    }, [dispatch])


    return (
        <div>
            {
                products?.length > 0 ?
                    products?.map((el) =>
                        <div key={el.id}>
                            <h2>{el.title}</h2>
                            <h3>{el.price}</h3>
                        </div>
                    )
                    :
                    <h2>Products are not found</h2>
            }
        </div>
    );
};

export default Main;