import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchByProductName, fetchGetAllProducts } from '../../store/slice/ProductsSlice';

const Header = () => {
    const [name, setName] = useState('')
    const  dispatch = useDispatch()

    const searchByName = (e) => {
        e.preventDefault();

        if (!name.trim().length) {
            alert('Введите название фильма');
            return;
        }

        dispatch(fetchByProductName(name));
        
        setName('');
    };

    return (
        <header>
            <form onSubmit={searchByName}>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder='Product name' />
                <button>Search</button>
            </form>
        </header>
    );
};

export default Header;