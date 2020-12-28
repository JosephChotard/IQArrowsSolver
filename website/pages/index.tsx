import Board from '@components/board/Board'
import { DIRECTIONS, BOARD } from '@components/board/boardInput/Board.model'
import BoardInput from '@components/board/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'

const WIDTH = 6
const HEIGHT = 3
  
export default function Home() {
  const [grids, setGrids] = React.useState<BOARD[]>([])

  React.useEffect(() => {
    fetch('/grids.json')
      .then(data => data.json())
      .then(json => setGrids(json))
  }, [])

  const [
    grid,
    setGrid
  ] = React.useState<BOARD>(
    new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
  )
  
  const [solutions, setSolutions] = React.useState([])

  const search = () => {
    setSolutions(grids.filter(g => {
      for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) { 
        const row = grid[rowIndex]
        for (let cellIndex = 0; cellIndex < row.length; cellIndex++) { 
          const cell = row[cellIndex]
          if (cell[0] !== DIRECTIONS.NONE) {
            console.log(rowIndex, cellIndex, cell[0], g[rowIndex][cellIndex][0])
            if (cell[0] !== g[rowIndex][cellIndex][0]) {
              console.log('falsed')
              return false
            }
          }
        }
      }
      console.log(g)
      return true
    }))
  }


  return (
    <div>
      <Head>
        <title>IQ Arrows Solver</title>
      </Head>
      <BoardInput
        grid={grid}
        setGrid={setGrid}
      />
      <button onClick={search}>Search</button>
      {solutions.slice(0,20).map((grid, i) => (
        <Board
          key={i}
          grid={grid}
        />
      ))}
      
    </div>
  )
}
