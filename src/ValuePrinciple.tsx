import { ReactElement } from 'react'

function ValuePrinciple (): ReactElement {
  return (
    <div className='justify-center flex flex-col items-center font-serif gap-12 min-h-screen p-16 text-center max-w-4xl m-auto'>
      <div className='flex-grow' />

      {/* Value */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>
          One Value: Delivered Value
        </h2>
        <p>
          In the world of Lean Pragmatism, our core value is simple yet profound: Add Value. Every action, decision, and iteration should contribute meaningfully to the desired outcomes. We believe in cutting through the noise and focusing on what truly matters—adding value at every step. By emphasizing this value, we ensure that our efforts are purposeful, impactful, and aligned with the goals we aim to achieve.
        </p>
      </div>

      {/* Principle */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl text-center'>
          One Principle: Do it, as long as you can handle it and it creates value.
        </h2>
        <p>
          At Lean Pragmatism, we embrace the principle of Just Do It. No overthinking, no unnecessary delays—just take action. When faced with a challenge or question, our approach is to act swiftly and decisively. This principle embodies the spirit of getting things done, encouraging a proactive mindset that drives progress. By 'Just Doing It,' we foster a culture of initiative, empowerment, and continuous improvement.
        </p>
      </div>

      <div className='flex-grow' />
    </div>
  )
}

export { ValuePrinciple }
