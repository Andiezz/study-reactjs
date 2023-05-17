import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//? Each component has its instance
//? State is seperated per component instance
const ExpenseItem = (props) => {
  //? props
  //? useState: is a hook (start with use), use directly in component functions
  //? first element is the value, second is the function to set the value
  //? always get a new snapshot of the value when the component is re-executed
  //? when call first time, useState takes the argument as the initial value
  //? next time, React will detect that this state has been initialized, and grab the latest state
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //? the component function will be executed again
    //? is scheduled to be executed
    setTitle('Updated!');
    console.log(title);
  };

  return (
    //? combine components -> composition (props.children feature)
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
