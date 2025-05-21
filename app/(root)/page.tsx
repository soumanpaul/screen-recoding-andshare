import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />
      <h1 className='text-2xl font-karle'>Welcome to Loom clone</h1>
      <VideoCard />
    </main>
  )
}

export default Page