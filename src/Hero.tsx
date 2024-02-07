import { ReactElement } from 'react'

function Hero (): ReactElement {
  return (
    <div className='justify-center flex flex-col items-center font-serif gap-6 min-h-screen section'>
      <div className='flex-grow' />

      {/* Title */}
      <h1 className='text-5xl'>
        Lean Pragmatism
      </h1>

      {/* sub title */}
      <p className='text-lg max-w-96 text-center'>
        Agile <span className='text-gray-400 line-through italic'>framework</span> without the fuzz.<br />No training required. No certification required.
      </p>

      {/* button to go to the value and principle definition */}
      <button className='bg-black hover:bg-blue-700 text-white py-2 px-4 rounded-sm text-lg mt-4'>
        One value / One principle
      </button>

      <div className='flex-grow' />
    </div>
  )
}

export { Hero }
