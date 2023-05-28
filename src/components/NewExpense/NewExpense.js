import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEdting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    /// lifting state up to App component
    props.onAddExpense(expenseData);
  };

  const 

  const cancelHandler = () => {
    setIsEdting(false);
  };

  return (
    //? pass data props from child to parent
    <div className="new-expense">
      <button onClick={addExpenseHandler}>Add New Expense</button>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
};

export default NewExpense;
