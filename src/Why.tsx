import { ReactElement } from 'react'

function Why (): ReactElement {
  return (
    <div className='justify-center flex flex-col items-center font-serif gap-12 min-h-screen p-16 text-center max-w-2xl m-auto'>
      {/* Value */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>
          The Story of Lean Pragmatism
        </h2>
        <p>
          We are Stephan & Joachim. We've dedicated ourselves to living and teaching Scrum, SAFe, and fostering an agile mindset. But we've noticed something troubling: amidst the sea of frameworks and certifications, the true essence of agility often gets lost.
        </p>
        <p>
          We've seen teams struggle to adopt frameworks without embracing the agile mindset. One weekend, we found ourselves driving across Europe to help unblock a team. As we reflected during our journey over a beer, we thought about how the actual core mindset of agile seems to be forgotten too often.
        </p>
        <p>
          And that's how Lean Pragmatism was born—a way to keep agility alive in a world of frameworks and dogmas.
        </p>
        <p>
          First, understand and adopt the mindset. Only then, frameworks will really help you to scale and grow.
        </p>
      </div>
    </div>
  )
}

export { Why }
