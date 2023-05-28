import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  //? storing jsx code in a variable
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense</h2>
  }

  return (
    <ul className="expenses-list">
      {
        //? React update all the list
        //? key: unique id, update list more efficiently
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;
