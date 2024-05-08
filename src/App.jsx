import { useAtom } from 'jotai'
import { counter } from './store'
import TestComponent from './components/test-component'

function App() {
  const [count, setCount] = useAtom(counter)
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen w-full">
        <p className="text-3xl font-medium">{count}</p>
        <div className="mt-6 flex gap-4">
          <button
            className="bg-gray-200 rounded text-gray-800 w-20 pt-0.5 pb-1.5"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            className="bg-gray-800 text-white rounded w-20 pt-0.5 pb-1"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </section>
      <TestComponent />
    </>
  )
}

export default App
