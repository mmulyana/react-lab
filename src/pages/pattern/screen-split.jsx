export default function ScreenSplitPage() {
  return (
    <ScreenSplit>
      <NewsDisplay />
      <NewsList />
    </ScreenSplit>
  )
}

function ScreenSplit({ children }) {
  const [left, right] = children
  return (
    <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-5xl mx-auto gap-5 p-5'>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

function NewsDisplay() {
  return (
    <div className='w-full h-80 md:h-full bg-gray-200 rounded-lg p-5 mt-2 hover:shadow-xl hover:shadow-gray-500/20 duration-75 ease-in'>
      <div className='w-full h-full flex flex-col items-start justify-end'>
        <h1 className='text-4xl font-medium text-gray-700'>Headline</h1>
        <p className='text-gray-500 mt-1.5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate
          in, eaque iste, cupiditate officiis enim similique laboriosam vitae
          facilis odit
        </p>
      </div>
    </div>
  )
}

function NewsList() {
  return (
    <div className='pt-2'>
      <p className='text-medium text-gray-700'>News</p>
      <div className='flex flex-col gap-5 mt-2'>
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            className='w-full min-h-20 rounded-lg bg-gray-200 flex flex-col items-start justify-end p-4 hover:shadow-xl hover:shadow-gray-500/20 duration-75 ease-in'
          >
            <p className='text-lg text-gray-700'>News Title</p>
            <p className='text-sm text-gray-400 mt-1.5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              esse quos
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
