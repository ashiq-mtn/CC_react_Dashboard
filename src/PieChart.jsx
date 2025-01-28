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
    <div className='flex flex-col bg-white rounded-sm h-full'>
      <div className='py-6 px-5 text-xl font-normal text-black'>
        Waste Categories
      </div>
      <hr className='h-px bg-gray-100 border-0 dark:bg-gray-200' />
      <canvas
        ref={chartRef}
        className='w-120 sm:w-full md:w-85 lg:w-120 h-auto mx-auto min-w-[120px] min-w-[120px]'
        // className="w-full h-auto md:w-50 h-96 lg:w-120 h-[500px]"
      />
    </div>
  )
}

export default PieChart
