import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import LogTable from './LogTable.jsx'
import Maps from './Map.jsx'
import Nav from './Nav.jsx'
import HeaderCard from './HeaderCard.jsx'
import PieChart from './PieChart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <HeaderCard />
    <div className='grid grid-cols-2 gap-0 sm:grid-cols-1'>
      <PieChart />
      <Maps />
    </div>

    {/* <LogTable /> */}
  </StrictMode>
)
