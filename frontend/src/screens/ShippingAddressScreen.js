import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>

                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" id="postalCode" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
                </div>

                <div>
                    <label/>
                    <button className="primary" type="submit">Continue</button>
                </div>

            </form>
        </div>
    )
}