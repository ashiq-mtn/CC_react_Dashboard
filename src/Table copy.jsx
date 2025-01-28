function Table () {
  return (
    <div className='relative overflow-hidden rounded-sm shadow-md bg-white mt-7'>
      <div className='py-5 px-5 text-xl font-normal text-black'>
        Realtime Log
      </div>
      <hr className='h-px border-0 bg-gray-100' />
      <div className='overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-800'>
          <thead className='text-[13px] text-gray-700 border-b-1 border-slate-300 bg-stone-50 dark:bg-slate-100 dark:text-gray-500'>
            <tr>
              <th scope='col' class='px-6 py-4'>
                Bin ID
              </th>
              <th scope='col' class='px-6 py-4'>
                Waste Type
              </th>
              <th scope='col' class='px-6 py-4'>
                Fill level
              </th>
              <th scope='col' class='px-6 py-4'>
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class='bg-white dark:bg-white-100 dark:border-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-200'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800'
              >
                001
              </th>
              <td class='px-6 py-4'>Plastic</td>
              <td class='px-6 py-4'>80%</td>
              <td class='px-6 py-4'>8:50 am</td>
            </tr>
            <tr class='bg-white dark:bg-white-100 dark:border-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-200'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800'
              >
                002
              </th>
              <td class='px-6 py-4'>Paper</td>
              <td class='px-6 py-4'>70%</td>
              <td class='px-6 py-4'>8:40 am</td>
            </tr>
            <tr class='bg-white dark:bg-white-100 hover:bg-gray-50 dark:hover:bg-slate-200'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800'
              >
                003
              </th>
              <td class='px-6 py-4'>Other</td>
              <td class='px-6 py-4'>60%</td>
              <td class='px-6 py-4'>7:30 am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
