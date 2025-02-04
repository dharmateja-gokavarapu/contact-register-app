import { useState } from 'react'
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from './ContactList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
     <AddContact />
     <ContactList />
    </div>
  )
}

export default App
