import React, { useState } from 'react';

import './Donation.css';

function Donations(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [donationCategory, setDonationCategory] = useState('Annadanam');
  const [donationAmount, setDonationAmount] = useState('');
  const [idProofType, setIdProofType] = useState('');
  const [idProofNumber, setIdProofNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Father Name:', fatherName);
    console.log('Contact Number:', contactNumber);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Country:', country);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Pincode:', pincode);
    console.log('Donation Category:', donationCategory);
    console.log('Donation Amount:', donationAmount);
    console.log('ID Proof Type:', idProofType);
    console.log('ID Proof Number:', idProofNumber);
    console.log('Payment Method:', paymentMethod);
    if (paymentMethod === 'Card') {
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', expiryDate);
      console.log('CVV:', cvv);
    }
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="form">
        <fieldset className="fieldset">
          <legend className="legend">Add Personal Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="fatherName">Father's Name:</label>
              <input
                id="fatherName"
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                id="contactNumber"
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Add Address Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="country">Country:</label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="city">City:</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="state">State:</label>
              <input
                id="state"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="pincode">Pincode:</label>
              <input
                id="pincode"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Add Other Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="donationCategory">Donation Category:</label>
              <select
                id="donationCategory"
                value={donationCategory}
                onChange={(e) => setDonationCategory(e.target.value)}
                className="input"
              >
                <option value="Annadanam">Annadanam</option>
                <option value="Alaya Abhivrudhi">Alaya Abhivrudhi</option>
                <option value="Bangaru Ratha Nirmanam">Bangaru Ratha Nirmanam</option>
                <option value="Free Prasadam">Free Prasadam</option>
                <option value="Ehundi">Ehundi</option>
                <option value="Abhishekam">Abhishekam</option>
                <option value="General Donation">General Donation</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="donationAmount">Donation Amount:</label>
              <input
                id="donationAmount"
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="idProofType">ID Proof Type:</label>
              <select
                id="idProofType"
                value={idProofType}
                onChange={(e) => setIdProofType(e.target.value)}
                className="input"
              >
                <option value="Aadhar">Aadhar</option>
                <option value="Pan">Pan</option>
                <option value="License">License</option>
                <option value="Passport">Passport</option>
                <option value="Election ID">Election ID</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="idProofNumber">ID Proof Number:</label>
              <input
                id="idProofNumber"
                type="text"
                value={idProofNumber}
                onChange={(e) => setIdProofNumber(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="input"
              >
              <option value="">Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                
              </select>
            </div>
            {paymentMethod === 'UPI' && (
          <div className="qrCodeContainer">
            <h3>Scan and Pay</h3>
            <img src={`${process.env.PUBLIC_URL}/image/payment.png`} alt="scanner" />
          </div>
        )}
        {paymentMethod === 'Card' && (
          <div className="cardDetailsContainer">
            <h3>Enter Card Details</h3>
            
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
        )}
  

          </div>
        </fieldset>

        <button type="submit" className="button">Donate Now</button>
      </form>
      
    </div>
  );
}

export default Donations;
