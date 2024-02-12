import { ReactElement } from 'react'
import LinkedIn from './assets/linkedin.svg'
import X from './assets/x.svg'

function Footer (): ReactElement {
  const year = new Date().getFullYear()

  return (
    <footer className='text-xs text-gray-500 py-4 md:sticky md:bottom-0 mt-0 md:z-10 text-center flex flex-col gap-3 bg-gray-100 w-full'>
      <div className='flex md:flex-row flex-col gap-2 justify-center'>
        <span><span className='line-through italic text-gray-400'>Invented</span> Written down by: </span>
        <div className='flex flex-row gap-2 justify-center'>
          <a href='https://twitter.com/sarensw'>
            <img src={X} className='w-4' />
          </a>
          <a href='https://linkedin.com/in/stephanarenswald'>
            <img src={LinkedIn} className='w-4' />
          </a>
          <span>Stephan Arenswald</span>

          <a href='https://linkedin.com/in/joachimandreasritter'>
            <img src={LinkedIn} className='w-4 ml-4' />
          </a>
          <span>Joachim Ritter</span>
        </div>
      </div>
      <p>
        &copy; {year} SarensX OÜ <a className='ml-8' href='/imprint.html'>Impressum</a>
      </p>
    </footer>
  )
}

export { Footer }
