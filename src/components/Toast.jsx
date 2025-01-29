function Toast() {
  return (
    <>
    <div id="alert" className="fixed flex items-center w-full max-w-xs p-4 space-x-2 text-gray-500 bg-white rounded-lg shadow-sm right-5 bottom-5 dark:text-gray-400 dark:bg-slate-700" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>

        <span className="sr-only">Fire icon</span>
      </div>
      <div className="flex-1 text-sm font-normal truncate">
        Bin 001 is full! Ready for pickup
      </div>
      <button type="button" className="flex-shrink-0 ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-gray-700" data-dismiss-target="#alert" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
    
    </>
  )
}

export default Toast
