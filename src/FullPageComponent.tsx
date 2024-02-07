import { useState, ReactElement } from 'react'
import { Hero } from './Hero'
import { ValuePrinciple } from './ValuePrinciple'
import { Footer } from './Footer'
import { Why } from './Why'

function FullPageComponent (): ReactElement {
  const [currentPage, setCurrentPage] = useState(0)

  const handleScroll = (e: any): void => {
    const scrollPosition = e.target.scrollTop
    const pageHeight = window.innerHeight
    const newPage = Math.floor(scrollPosition / pageHeight)
    setCurrentPage(newPage)
  }

  return (
    <div className='flex flex-col min-h-screen overflow-y-hidden'>
      <div className='full-page-container' onScroll={handleScroll}>
        <div className='flex-none h-screen flex items-center justify-center'><Hero /></div>
        <div className='flex-none h-screen flex items-center justify-center '><ValuePrinciple /></div>
        <div className='flex-none h-screen flex items-center justify-center '><Why /></div>
        {/* Add more pages as needed */}

        <div className='dots-container'>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`dot ${currentPage === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FullPageComponent
