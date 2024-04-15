import { useState } from 'react'

export default function FunctionAsChildrenPage() {
  return (
    <div className='max-w-5xl pt-20 mx-auto flex flex-col gap-8'>
      <div>
        <p className='text-center font-medium mb-4'>Style 1</p>
        <Counter>
          {(count, increment, decrement) => (
            <div className='grid grid-cols-3 max-w-[240px] mx-auto gap-2'>
              <button
                className='h-8 flex items-center justify-center text-2xl pb-1 rounded-l w-full bg-gray-100 text-gray-500'
                onClick={decrement}
              >
                -
              </button>
              <div
                className={[
                  'w-full h-full flex items-center justify-center',
                  count < 1
                    ? 'text-white bg-red-500'
                    : 'bg-gray-100 text-gray-500',
                ].join(' ')}
              >
                {count}
              </div>
              <button
                className='h-8 flex items-center justify-center text-2xl pb-1 rounded-r text-white w-full bg-indigo-700'
                onClick={increment}
              >
                +
              </button>
            </div>
          )}
        </Counter>
      </div>
      <div>
        <p className='text-center font-medium mb-4'>Style 2</p>
        <Counter>
          {(count, increment, decrement) => (
            <div className='grid grid-cols-2 max-w-[240px] mx-auto gap-2'>
              <div className='w-full h-full flex items-center justify-center bg-gray-100 rounded-l'>
                {count}
              </div>
              <div className='flex flex-col gap-2'>
                <button
                  className='h-8 flex items-center justify-center text-2xl pb-1 rounded-tr text-white w-full bg-indigo-700'
                  onClick={increment}
                >
                  +
                </button>
                <button
                  className='h-8 flex items-center justify-center text-2xl pb-1 rounded-br text-gray-500 w-full bg-gray-200'
                  onClick={() => count > 1 && decrement()}
                >
                  -
                </button>
              </div>
            </div>
          )}
        </Counter>
      </div>
    </div>
  )
}

function Counter({ children }) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return children(count, increment, decrement)
}
