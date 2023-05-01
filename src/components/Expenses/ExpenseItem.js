import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props){

  const [title,setTitle]=useState(props.title);
  const [amount,setAmount]=useState(props.amount);

const changeTitle=()=>{
setTitle('updated Title');
}

const changePrice=()=>{
  setAmount(100);
}

    return(
      <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount}  location={props.location}   title={title} />
     <button onClick={changeTitle}>Change Title</button>
    <button onClick={changePrice}>update price</button>
    </Card>
    );
}

export default ExpenseItem;