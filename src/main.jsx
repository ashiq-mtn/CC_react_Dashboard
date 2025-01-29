import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import LogTable from './LogTable.jsx'
import Maps from './Map.jsx'
import Nav from './Nav.jsx'
import HeaderCard from './HeaderCard.jsx'
import PieChart from './PieChart.jsx'
import Table from './Table-copy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Root container */}
    <div className='min-h-screen w-full overflow-x-hidden'>
      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main className='flex-1 p-6'>
        <HeaderCard />

        {/* Charts section */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 my-5 mt-9'>
          <div className='flex-1 bg-white rounded-sm shadow-md'>
            <PieChart />
          </div>
          <div className='flex-1 bg-white rounded-sm shadow-md min-h-[300px]'>
            <Maps />
          </div>
        </div>

        <Table />
      </main>
    </div>
  </StrictMode>
)
