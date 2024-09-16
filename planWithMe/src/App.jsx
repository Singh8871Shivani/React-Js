import { useState } from 'react'
import './App.css'
import Data from './Data'
import Tours from './Components/Tours';
import image from './assets/images.jpeg';

function App() {

  const [tours, setTours] = useState(()=>{
    return Data;
  });

  function removeTour({id}) {
    // to remove card of that id 
    const newTours = tours.filter( tour => tour.id !== id );
    setTours(newTours)
  }
  
  if(tours.length === 0) {
    return (
      <div className='refresh'>

        <h2>No Tours Left</h2>
        <button onClick={() => setTours(Data)} className='btn-white'
        >Refresh
        </button>

      </div>
    )
  }

  return (
    <div style={{ 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      minHeight: '100vh' // Ensure the background covers the entire viewport
    }}>
       
       <Tours tours={tours} removeTour={removeTour}></Tours>
      
    </div>
  )
}

export default App
