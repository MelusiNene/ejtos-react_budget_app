import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencyStyles.css'; // Import the CSS file here

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Currency: {newCurrency}</span>
            <select value={newCurrency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£ ">£ Pound </option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;