import ExpenseItem from "./components/ExpenseItem";

const expenses=[
  {
    id:1,
   date:new Date(2021,2,28),
   title:"Car Insurance",
   amount:294.67,
   location:"Shahad"
  },
  {
    id:2,
    date:new Date(2022,4,8),
    title:"Bike Insurance",
    amount:29.67,
    location:"Shahad"
   },
   {
    id:3,
    date:new Date(2024,11,2),
    title:"Food",
    amount:94.67,
    location:"Kalyan"
   },
   {
    id:4,
    date:new Date(2021,2,28),
    title:"Dmart",
    amount:294.67,
    location:"maharal"
   },
  
  ]

function App() {
  return (
    <div>
      <h2>Lets get started</h2>
       {
        expenses.map((value)=>(
        <ExpenseItem title={value.title} date={value.date} location={value.location} amount={value.amount} ></ExpenseItem>
        ))
       }
    </div>
  );
}

export default App;
