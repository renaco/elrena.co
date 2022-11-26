import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to my web site</h1>
      <p>Are you ready for the magic? <Link href="/home">enjoy</Link></p>
    </div>
  )
}

export default Home
