import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import CreditCardForm from "./CreditCardForm"

describe("CreditCardForm", () => {
    test("renders the CreditCardForm component", () => {
      render(<CreditCardForm />);
    });
  
    test("calls the onChangeName handler when the name input changes", () => {
      const onChangeName = jest.fn();
      const { getByLabelText } = render(
        <CreditCardForm name="" onChangeName={onChangeName} />
      );
      const nameInput = getByLabelText("Name on Card:");
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
  
      expect(onChangeName).toHaveBeenCalledTimes(1);
    });

    test("calls the onSubmit handler when the form is submitted", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Simulate user input
        const nameInput = getByLabelText("Name on Card:");
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
      
        const cardNumberInput = getByLabelText("Card Number:");
        fireEvent.change(cardNumberInput, { target: { value: "1234567890123456" } });
      
        const expirationDateInput = getByLabelText("Expiration Date:");
        fireEvent.change(expirationDateInput, { target: { value: "01/26" } });
      
        const cvvInput = getByLabelText("CVV:");
        fireEvent.change(cvvInput, { target: { value: "123" } });
      
        // Submit the form
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });

      test("does not call the onSubmit handler when the name input is empty", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Submit the form without entering a name
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).not.toHaveBeenCalled();
      });
      
      test("does not call the onSubmit handler when the card number input is invalid", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Enter an invalid card number (less than 16 digits)
        const cardNumberInput = getByLabelText("Card Number:");
        fireEvent.change(cardNumberInput, { target: { value: "1234567890" } });
      
        // Submit the form
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).not.toHaveBeenCalled();
      });
      
      test("does not call the onSubmit handler when the expiration date input is invalid", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Enter an invalid expiration date (expired date)
        const expirationDateInput = getByLabelText("Expiration Date:");
        fireEvent.change(expirationDateInput, { target: { value: "01/20" } });
      
        // Submit the form
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).not.toHaveBeenCalled();
      });
      
      test("does not call the onSubmit handler when the CVV input is invalid", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Enter an invalid CVV (less than 3 digits)
        const cvvInput = getByLabelText("CVV:");
        fireEvent.change(cvvInput, { target: { value: "12" } });
      
        // Submit the form
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).not.toHaveBeenCalled();
      });
      
      test("calls the onSubmit handler when all inputs are valid", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
          <CreditCardForm onSubmit={onSubmit} />
        );
      
        // Enter valid input values
        const nameInput = getByLabelText("Name on Card:");
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
      
        const cardNumberInput = getByLabelText("Card Number:");
        fireEvent.change(cardNumberInput, { target: { value: "1234567890123456" } });
      
        const expirationDateInput = getByLabelText("Expiration Date:");
        fireEvent.change(expirationDateInput, { target: { value: "01/26" } });
      
        const cvvInput = getByLabelText("CVV:");
        fireEvent.change(cvvInput, { target: { value: "123" } });
      
        // Submit the form
        const submitButton = getByText("Pay now");
        fireEvent.click(submitButton);
      
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
            
  });