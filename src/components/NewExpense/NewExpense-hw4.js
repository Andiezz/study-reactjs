import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addExpenseHandler = () => {
    setExpenseForm(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelExpenseData={cancelExpenseDataHandler}
      />
    );
  };

  const [expenseForm, setExpenseForm] = useState(
    <button onClick={addExpenseHandler}>Add New Expense</button>
  );

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenseForm(
      <button onClick={addExpenseHandler}>Add New Expense</button>
    );
    /// lifting state up to App component
    props.onAddExpense(expenseData);
  };

  const cancelExpenseDataHandler = () => {
    setExpenseForm(
      <button onClick={addExpenseHandler}>Add New Expense</button>
    );
  };

  return (
    //? pass data props from child to parent
    <div className="new-expense">{expenseForm}</div>
  );
};

export default NewExpense;
