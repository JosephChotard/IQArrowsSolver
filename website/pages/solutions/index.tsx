import Board from '@components/board/Board'
import { DIRECTIONS, BOARD } from '@components/board/boardInput/Board.model'
import BoardInput from '@components/board/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'
import styles from './Solutions.module.scss'
import Router from 'next/router'
import applyConstraintToGrid from 'lib/applyConstraintToGrid'
import constraintToQuery from 'lib/constraintToQuery'
import windowLocationToConstraint from 'lib/windowLocationToConstraint'
import Link from 'next/link'


const WIDTH = 6
const HEIGHT = 3
  
export default function Solutions() {
  const [
    grid,
    setGrid
  ] = React.useState<BOARD>(
    new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
  )

  React.useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_basePath ? process.env.NEXT_PUBLIC_basePath : ''}/grids.json`)
      .then(data => data.json())
      .then(json => {
        setGrids(json)
      })
    if (window.location.search.length > 0) {
      const params = windowLocationToConstraint()

      setGrid(grid => applyConstraintToGrid(grid, params))
    }
  }, [])

  const [grids, setGrids] = React.useState<BOARD[]>(null)
  
  const [solutions, setSolutions] = React.useState([])

  const search = () => {
    if (!grids) {
      return
    }
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

  const onGridChange = (grid: BOARD) => {
    let queryObj: Record<string, number> = {}
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell[0] !== DIRECTIONS.NONE) {
          queryObj[`${rowIndex}c${cellIndex}`] = cell[0]
        }
      })
    })
    const href = `/solutions/${constraintToQuery(queryObj)}`
    Router.replace(href, href, {
        shallow: true,
      })
    setGrid(grid)
  }

  React.useEffect(() => {
    search()
  }, [grid, grids])


  return (
    <div className={styles.index}>
      <Head>
        <title>IQ Arrows Logic Puzzle Solver</title>
      </Head>
      <h1>IQ Arrows Logic Puzzle Solver</h1>
      <p>Solve any IQ Arrows puzzle instantly for free</p>
      <Link href="/">
        <a className={styles.generateNewPuzzle}>
          Generate more puzzles
        </a>
      </Link>
      <BoardInput
        grid={grid}
        setGrid={onGridChange}
      />
      {grids === null
        ? <p>Loading...</p>
        : (
          <div className={styles.grids}>
            {solutions.slice(0,49).map((grid, i) => (
              <Board
                key={i}
                grid={grid}
              />
            ))}
              {solutions.length > 49 && (
                <p className={styles.firstResults}>Only displaying first 49 of {solutions.length} results</p>
            )}
          </div>
        )
      }
    </div>
  )
}
