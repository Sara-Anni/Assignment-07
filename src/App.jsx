import { Suspense } from 'react';
import './app.css'
import Banner from './components/banner';
import Body from './components/body';
import Navbar from './components/navbar';


const fetchTickets = async() =>{
  const res = await fetch("/tickets.json")
  return res.json()
}

 function App() {
  const ticketsPromise = fetchTickets()
  return (
    <>
    <div className="bg-white min-h-screen" data-theme="light">
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Body ticketsPromise={ticketsPromise}></Body>
      </Suspense>
    </div>
     
    </>
  )
}

export default App;