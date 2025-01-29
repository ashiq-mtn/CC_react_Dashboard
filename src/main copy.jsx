import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar.jsx'
import Maps from './components/Map.jsx'
import HeaderCard from './components/HeaderCard.jsx'
import PieChart from './components/PieChart.jsx'
import Table from './components/Table.jsx'
import Toast from './components/Toast.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Root container */}
    <div className='min-h-screen w-full overflow-x-hidden'>
      {/* Navigation */}
      <Navbar />

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
        <Toast />
      </main>
    </div>
  </StrictMode>
)
