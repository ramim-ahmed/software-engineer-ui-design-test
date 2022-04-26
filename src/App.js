import React, { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [data, setData] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
          const request = await fetch('./data.json');
          const data = await request.json();
          setData(data);
          console.log(data);
    }
    fetchData();
  }, [])
  return (
   <div>
     <Home data={data}/>
   </div>
  )
}

export default App

