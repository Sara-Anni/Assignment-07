import './app.css'
import Banner from './components/banner';
import Body from './components/body';
import Navbar from './components/navbar';

 function App() {
  

  return (
    <>
    <div className="bg-white min-h-screen" data-theme="light">
      <Navbar></Navbar>
      <Banner></Banner>
      <Body></Body>
    </div>
     
    </>
  )
}

export default App;