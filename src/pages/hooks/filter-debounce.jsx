import React, { useState, useRef } from 'react'

const TECH_STACK = [
  'Javascript',
  'Typescript',
  'Next.JS',
  'Node.js',
  'Express',
  'Prisma',
]

export default function FilterDebouncePage() {
  return (
    <section className='max-w-xl pt-20 mx-auto px-4'>
      <FilterComponent data={TECH_STACK} />
    </section>
  )
}

function FilterComponent({ data }) {
  const inputRef = useRef(null)
  const [filteredData, setFilteredData] = useState(data)
  let debounceTimeout

  const debounce = (func, delay) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(func, delay)
  }

  const handleFilter = () => {
    const filterValue = inputRef.current.value.toLowerCase()
    const filteredResult = data.filter((item) =>
      item.toLowerCase().includes(filterValue)
    )
    setFilteredData(filteredResult)
  }

  const handleChange = () => {
    debounce(handleFilter, 300)
  }

  return (
    <div className='p-2 bg-gray-50 rounded'>
      <input
        type='text'
        ref={inputRef}
        placeholder='Enter name'
        onChange={handleChange}
        className='w-full py-2 px-4 rounded border shadow shadow-gray-700/20'
      />
      <p className='mt-3 mb-2 text-gray-400 text-sm'>Data</p>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index} className='text-gray-500 hover:bg-gray-500/10 px-2 py-1.5 rounded'>{item}</li>
        ))}
      </ul>
    </div>
  )
}
