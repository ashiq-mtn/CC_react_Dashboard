function Card () {
  return (
    <div className='max-w-lg p-10 bg-white border border-gray-250 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-500'>
      <img
        className='size-16 shrink-0'
        src='/img/logo.svg'
        alt='ChitChat Logo'
      />
      <div>
        <div className='text-xl font-medium text-black dark:text-white'>
          Total Bins
        </div>
      </div>
    </div>
  )
}

export default Card
