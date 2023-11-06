import React, { useState } from "react";

function FoodOrderForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');

    return (
        <form>

            <label htmlFor="name">Name:</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

            <label htmlFor="address">Address:</label>
            <input id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>

            <label htmlFor="order">Order:</label>
            <input id="order" value={order} onChange={(e) => setOrder(e.target.value)}/>

            <button type="submit">Submit Order</button>

        </form>
    )
}

export default FoodOrderForm;