import React, { useEffect, useRef } from 'react'

function PieChart () {
  const chartRef = useRef(null)

  useEffect(() => {
    if (window.Chart) {
      const dataPie = {
        labels: ['Plastic', 'Paper', 'Other'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(133, 105, 241)',
              'rgb(164, 101, 241)',
              'rgb(101, 143, 241)'
            ],
            hoverOffset: 4
          }
        ]
      }

      const configPie = {
        type: 'pie',
        data: dataPie,
        options: {
          responsive: true, // Ensures the chart scales with the canvas size
          maintainAspectRatio: true // Keeps the aspect ratio of the chart
        }
      }

      const chartInstance = new window.Chart(chartRef.current, configPie)

      // Cleanup to destroy the chart instance on component unmount
      return () => {
        chartInstance.destroy()
      }
    }
  }, [])

  return (
    <div className='flex'>
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden bg-white shadow-md'>
        <div className='py-6 px-5 text-xl'>Waste Categories</div>
        <hr class='h-px bg-gray-100 border-0 dark:bg-gray-200'></hr>
        {/* Responsive canvas */}
        <canvas ref={chartRef} className='w-75 h-auto p-2 mx-auto'></canvas>
      </div>
    </div>
  )
}

export default PieChart
