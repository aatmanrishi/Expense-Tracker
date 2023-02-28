import React from 'react';
import Header from './componets/Header';
import   '../src/App.css';
import Balance from './componets/Balance';
import IncomeExpenses from './componets/IncomeExpenses';
import TransactionList from './componets/TransactionList';
import AddTransaction from './componets/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
 <>

 <GlobalProvider>
 <Header></Header>
  <div className= "container">
  <Balance></Balance>
  <IncomeExpenses></IncomeExpenses>
  <TransactionList></TransactionList>
  <AddTransaction></AddTransaction>
  </div>
 </GlobalProvider>

 </>
  )
}

export default App
