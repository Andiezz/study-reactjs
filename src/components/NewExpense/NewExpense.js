import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    /// lifting state up to App component
    props.onAddExpense(expenseData);
  };

  return (
    //? pass data props from child to parent
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
