import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchByProductName } from '../../store/slice/ProductsSlice';
import styles from '../Main/Main.module.css';

const Form = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const searchByName = (e) => {
        e.preventDefault();
        if (name.trim()) {
            dispatch(fetchByProductName(name));
            setName(''); // Clear input after search
        }
    };

    return (
        <Paper
            className={styles.form}
            component="form"
            onSubmit={searchByName}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                className={styles.input}
                type="text"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск..."
                inputProps={{ 'aria-label': 'Поиск...' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '7px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Form;
