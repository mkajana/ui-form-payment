import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CreditCardForm from "./CreditCardForm";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CreditCardForm> = {
  title: "CreditCardForm",
  component: CreditCardForm,
};

export default meta;
type Story = StoryObj<typeof CreditCardForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicCreditCard: Story = {
  render: () => (
    <CreditCardForm
      name="John Doe"
      onChangeCardNumber={() => console.log("martina")}
      onChangeCvv={() => console.log("martina")}
      onChangeName={() => console.log("martina")}
      onChangeExpirationDate={() => console.log("martina")}
      cardNumber="1234123412341234"
      expirationDate="11/12"
      cvv="123"
      onSubmit={() => console.log("martina")}
      cardType={""}
      onChangeCardType={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <CreditCardForm
      name="John Doe"
      onChangeCardNumber={() => console.log("onChangeCardNumber")}
      onChangeCvv={() => console.log("onChangeCvv")}
      onChangeName={() => console.log("onChangeName")}
      onChangeExpirationDate={() => console.log("onChangeExpirationDate")}
      cardNumber="abc" // Invalid card number
      expirationDate="11/12"
      cvv="123"
      onSubmit={() => console.log("onSubmit")}
      cardType={""}
      onChangeCardType={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
