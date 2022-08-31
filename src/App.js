import React from 'react'
import ScatterChart from './components/ScatterChart';

import BarChart from './components/BarChart'
import './App.css'

const App = () => {
  return (
    <div id='content'>
     <div id='left'>
      <BarChart/>
     </div>
     <div id='right'>
       <ScatterChart/>
     </div>
    </div>
  )
}

export default App
