import Image from 'next/image'
import loader from '../public/loader.gif'

export default function Loading() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="text-primary">Loading...</h2>
      <span><Image unoptimized={true} src={loader} alt="loader" width={200} /></span>
      <p>Hopefully not for too long :)</p>
    </main>
  )
}