import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto pt-10'>
      <p className='text-lg'>Pattern</p>
      <div className='flex gap-5 flex-wrap mt-2'>
        {patterns.map((pattern, i) => (
          <Link
            key={i}
            to={pattern.url}
            className='px-3.5 py-1.5 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'
          >
            {pattern.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

const patterns = [
  {
    name: 'Screen split',
    url: '/screensplit',
  },
  {
    name: 'Function as Children',
    url: '/funcAsChildren',
  },
]
