import React, { useState } from "react";

function FoodOrderForm() {
    return (
        <form>

            <label htmlFor="name">Name:</label>
            <input id="name" />

            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" />

            <label htmlFor="address">Address:</label>
            <input id="address" />

            <label htmlFor="Order">Order:</label>
            <input id="order" />

            <button type="submit">Submit Order</button>
            
        </form>
    )
}

export default FoodOrderForm;