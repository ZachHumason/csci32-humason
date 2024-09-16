import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { add } from '@repo/math/add'

export default function Home() {
  return (
    <div>
      <Navbar />
      <a className="flex h-screen items-center justify-center">
        <div>{add(1, 2)}</div>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-8 px-16 rounded-full">
          The Button
        </button>
      </a>
      <Footer />
    </div>
  )
}
