import BoardInput from '@components/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IQ Arrows Solver</title>
      </Head>
      <BoardInput />
    </div>
  )
}
