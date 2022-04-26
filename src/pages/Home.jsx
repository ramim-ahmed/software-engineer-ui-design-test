import React from 'react';
import Contents from '../components/Contents';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const Home = ({data}) => {
  return (
    <main>
       <Navbar brand='Starbucks' />
      <div className='flex'>
        <Sidebar />
        <Contents data={data}/>
      </div>
    </main>
  )
}

export default Home
