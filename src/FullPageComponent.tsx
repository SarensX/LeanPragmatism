import { useState, ReactElement, UIEvent } from 'react'
import { Hero } from './Hero'
import { ValuePrinciple } from './ValuePrinciple'
import { Footer } from './Footer'
import { Why } from './Why'

function FullPageComponent (): ReactElement {
  const [currentPage, setCurrentPage] = useState(0)

  const handleScroll = (e: UIEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement
    const scrollPosition = target.scrollTop
    const pageHeight = window.innerHeight

    const newPage = Math.floor(scrollPosition / pageHeight)
    setCurrentPage(newPage)
  }

  const scrollToId = (id: string): void => {
    console.log(id)
    // window.scrollTo({ top: document.getElementById(id)?.offsetTop, behavior: 'smooth' })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col min-h-screen overflow-y-hidden'>
      <div className='full-page-container' onScroll={handleScroll}>
        <div id='hero' className='flex-none h-screen flex items-center justify-center'><Hero /></div>
        <div id='valuePrinciple' className='flex-none h-screen flex items-center justify-center '><ValuePrinciple /></div>
        <div id='why' className='flex-none h-screen flex items-center justify-center '><Why /></div>
        {/* Add more pages as needed */}

        <div className='dots-container'>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`dot ${currentPage === index ? 'active' : ''} cursor-pointer`}
              onClick={() => scrollToId(['hero', 'valuePrinciple', 'why'][index])}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FullPageComponent
