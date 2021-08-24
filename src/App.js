import React from "react";
import Covid from "./MyComponents/Covid";
import Chart from "./MyComponents/Chart";
import "./App.css"


const App = () => {
  return(
    <>
      <Covid />
    <div className='App'>
    <div className='chart'>

    <Chart />
    </div>
    </div>
  
    </>


  )
}

export default App;