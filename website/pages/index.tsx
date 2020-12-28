import Board from '@components/board/Board'
import { DIRECTIONS, BOARD } from '@components/board/boardInput/Board.model'
import BoardInput from '@components/board/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'
import styles from './Index.module.scss'

const WIDTH = 6
const HEIGHT = 3
  
export default function Home() {
  const [grids, setGrids] = React.useState<BOARD[]>(null)

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
            if (cell[0] !== g[rowIndex][cellIndex][0]) {
              return false
            }
          }
        }
      }
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
      {grids === null
        ? <p>Loading...</p>
        : <button onClick={search}>Search</button>
      }
      <div className={styles.grids}>
      {solutions.map((grid, i) => (
        <Board
          key={i}
          grid={grid}
        />
      ))}
      </div>
    </div>
  )
}
