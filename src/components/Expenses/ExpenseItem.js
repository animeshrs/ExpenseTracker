import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
