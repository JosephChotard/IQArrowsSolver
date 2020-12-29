import Link from 'next/link'
import React from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      <Component {...pageProps} />
      <p className='madeBy'>
        This website was
        made by <a href="http://github.com/JosephChotard/" target="_blank">Joseph Chotard</a>
      </p>
      <p className='disclaimer'>
        I am not affiliated 
        with <a href="https://smartgames.eu" target="_blank" rel="noopener noreferrer">SmartGames</a> in
         any way.
        This website purely for entetertainment purposes.
        All code for this website is available for free, under the MIT license
        <a href="https://github.com/JosephChotard/IQArrowsSolver"> here</a>
      </p>
    </main>
  )
}

export default MyApp
