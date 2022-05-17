import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataSaveHandler = (expenseData) => {
    const enrichedData = { ...expenseData, id: Math.random().toString() };
    props.onAddExpenseData(enrichedData);
  };

  return (
    <div className="new-expense">
      {props.showExpenseForm ? (
        <ExpenseForm
          onExpenseDataSave={expenseDataSaveHandler}
          onCancelExpense={props.onCancelExpense}
        />
      ) : (
        <button onClick={props.onShowExpense}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
