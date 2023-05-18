import React, { useState } from "react";
import "./CreditCardForm.css";
import mastercardLogo from "../../../images/mastercardLogo.png";

interface CreditCardFormProps {
  name: string;
  onChangeName: () => void;
  cardNumber: string;
  onChangeCardNumber: () => void;
  expirationDate: string;
  onChangeExpirationDate: () => void;
  cvv: string;
  onChangeCvv: () => void;
  onSubmit: () => void;
}

const CreditCardForm = (props: CreditCardFormProps) => {
  return (
    <>
      <div className="card-container">
        <div className="card-type">
          <img src={mastercardLogo} alt="logo" className="logo-style" />
        </div>

        <div className="card-number">
          <p>4829 0921 8391 4458</p>
        </div>

        <div className="card-info">
          <div className="card-name">
            <p className="title">Cardholder name</p>
            <p className="info">John Doe</p>
          </div>

          <div className="card-expiration">
            <p className="title">Valid Thru</p>
            <p className="info">01/26</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h1> Fill in your card details:</h1>
        <form onSubmit={props.onSubmit}>
          <div className="input-style">
            <label htmlFor="name">Name on Card:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.name}
              onChange={props.onChangeName}
              required
              pattern="^[A-Za-z\s]*$"
              title="Please input your name correctly"
            />
          </div>
          <div className="input-style">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={props.cardNumber}
              onChange={props.onChangeCardNumber}
              required
              minLength={16}
              maxLength={16}
              pattern="^[0-9]*$"
              title="Your Card Number should contain only numbers."
            />
          </div>
          <div className="input-style">
            <label htmlFor="expirationDate">Expiration Date:</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={props.expirationDate}
              onChange={props.onChangeExpirationDate}
              required
              minLength={5}
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              title="Please input your Expiration Date correctly (MM/YY)"
            />
          </div>
          <div className="input-style">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={props.cvv}
              onChange={props.onChangeCvv}
              required
              pattern="^[0-9]*$"
              minLength={3}
              maxLength={3}
              title="Your CVV should contain only numbers."
            />
          </div>
          <button className="button-style" type="submit">
            Pay now
          </button>
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;