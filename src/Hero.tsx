import { ReactElement } from 'react'

function Hero (): ReactElement {
  const scrollToId = (id: string): void => {
    console.log(id)
    // window.scrollTo({ top: document.getElementById(id)?.offsetTop, behavior: 'smooth' })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='justify-center flex flex-col items-center font-serif gap-6 min-h-screen section'>
      <div className='flex-grow' />

      {/* Title */}
      <h1 className='text-5xl text-center p-8'>
        Lean Pragmatism
      </h1>

      {/* sub title */}
      <p className='text-lg max-w-96 text-center'>
        Agile <span className='text-gray-400 line-through italic'>framework</span> without the fuzz.<br />No training required. No certification required. No badges given.
      </p>

      {/* button to go to the value and principle definition */}
      <a className='bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-sm text-lg mt-4 cursor-pointer' onClick={() => scrollToId('valuePrinciple')}>
        One value / One principle
      </a>

      <div className='flex-grow' />
    </div>
  )
}

export { Hero }
