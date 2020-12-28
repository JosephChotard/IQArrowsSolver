import { DIRECTIONS } from '@components/boardInput/Board.model'
import BoardInput from '@components/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'

const WIDTH = 6
const HEIGHT = 3
  
export default function Home() {
  const [grids, setGrids] = React.useState([])

  React.useEffect(() => {
    fetch('/grids.json')
      .then(data => data.json())
      .then(json => setGrids(json))
  }, [])

  const [
    grid,
    setGrid
  ] = React.useState(
    new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
    )
  
  const [solutions, setSolutions] = React.useState([])


  return (
    <div>
      <Head>
        <title>IQ Arrows Solver</title>
      </Head>
      <BoardInput
        grid={grid}
        setGrid={setGrid}
      />
      <button>Search</button>
    </div>
  )
}
