import React from 'react';
import Contents from '../components/Contents';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const Home = () => {
  return (
    <main>
       <Navbar brand='Starbucks' />
      <div className='flex'>
        <Sidebar />
        <Contents />
      </div>
    </main>
  )
}

export default Home
