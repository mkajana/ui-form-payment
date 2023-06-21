import React, { useState } from "react";
import "./CreditCardForm.css";
import logo1 from "../../../images/logo1.png";
import logo2 from "../../../images/logo2.png";
import bg1 from "../../../images/bg1.png";
import bg2 from "../../../images/bg2.png";

interface CreditCardFormProps {
  name: string;
  onChangeName: () => void;
  cardNumber: string;
  onChangeCardNumber: () => void;
  expirationDate: string;
  onChangeExpirationDate: () => void;
  cvv: string;
  onChangeCvv: () => void;
  cardType: string;
  onChangeCardType: () => void;
  onSubmit: () => void;
}

const CreditCardForm = (props: CreditCardFormProps) => {
  const [cardType, setCardType] = useState("mastercard");

  const onChangeCardType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType(e.target.value);
  };

  return (
    <>
      <div
        className="card-container"
        style={{
          backgroundImage: `${
            cardType === "visa" ? `url(${bg2})` : `url(${bg1})`
          }`,
        }}
      >
        <div className="card-type">
          <img
            src={cardType === "visa" ? logo2 : logo1}
            alt="logo"
            className="logo-style"
          />
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
          <div className="type-container">
            <p>Card Type:</p>

            <div className="radio-label">
              <div>
                <input
                  type="radio"
                  name="cardType"
                  value="mastercard"
                  checked={props.cardType === "mastercard"}
                  onChange={onChangeCardType}
                />
                <label htmlFor="mastercard">Mastercard</label>
                <br />
              </div>

              <div>
                <input
                  type="radio"
                  name="cardType"
                  value="visa"
                  checked={props.cardType === "visa"}
                  onChange={onChangeCardType}
                />
                <label htmlFor="visa">Visa</label>
                <br />
              </div>
            </div>
          </div>

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
          <button
            className="button-style"
            type="submit"
            style={{
              backgroundColor: `${cardType === "visa" ? "#6F1D1B" : "#3423A6"}`,
            }}
          >
            Pay now
          </button>
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;
