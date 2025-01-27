function Nav (params) {
  return (
    <>
      <div>
        <section class='relative mx-auto'>
          <nav class='flex justify-between bg-teal-950 text-white w-screen'>
            <div class='px-5 xl:px-12 py-4 flex w-full items-center justify-between'>
              <span class='text-3xl font-bold font-heading' href='#'>
                Cashcrow
              </span>

              <div class='xl:flex items-center space-x-5 items-center'>
                <a class='flex items-center hover:text-gray-200' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-8 w-8 hover:text-gray-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default Nav
