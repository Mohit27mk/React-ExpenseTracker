import Expenses from './components/Expenses/Expenses';


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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
