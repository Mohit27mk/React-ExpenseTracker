import './ExpenseItem.css';

function ExpenseItem(){
const expenseDate=new Date(2021,2,28);
const expenseTitle="Car Insurance";
const expenseAmount=294.67;
const expenseLocation="Shahad";

    return(
      <div className='expense-item'>
        <div>{expenseDate.toDateString()}</div>
       <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <h3>{expenseLocation}</h3>
        <div className='expense-item__price'>{expenseAmount}</div>
       </div>
       </div>
    );
}

export default ExpenseItem;