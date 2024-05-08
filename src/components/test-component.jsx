import { useAtom } from 'jotai'
import { counter } from '../store'

export default function TestComponent() {
  const [count] = useAtom(counter)
  return (
    <div className="w-80 h-32 bg-white shadow-lg shadow-gray-300/40 border border-gray-200 rounded-lg flex flex-col items-center justify-center top-4 absolute right-4">
      <p className="text-sm text-gray-400">Test component</p>
      <p className="text-3xl font-semibold text-gray-800">{count}</p>
    </div>
  )
}
