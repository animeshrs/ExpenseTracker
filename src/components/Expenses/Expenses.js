import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        className="expenses-filter"
        onYearChange={yearChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredYear={filteredYear} expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
