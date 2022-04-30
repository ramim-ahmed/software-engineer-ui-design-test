import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  // fetch table data
     const [tableData, setTableData] = useState([]);
     useEffect( () => {
       const fetchData = async () => {
             const request = await fetch('./data.json');
             const response = await request.json();
             setTableData(response)
       }
       fetchData();
     }, [])

  return (
   <>
     {/* navbar */}
       <Navbar brand='Starbucks' />
       {/* sidebar */}
       <Sidebar />
       {/* main table content */}
       <MainContent data={tableData} />
   </>
  )
}

export default App

