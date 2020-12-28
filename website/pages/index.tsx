import Board from '@components/board/Board'
import { DIRECTIONS, BOARD } from '@components/board/boardInput/Board.model'
import BoardInput from '@components/board/boardInput/BoardInput'
import Head from 'next/head'
import React from 'react'
import styles from './Index.module.scss'
import Router from 'next/router'


const WIDTH = 6
const HEIGHT = 3
  
export default function Home() {
  const [
    grid,
    setGrid
  ] = React.useState<BOARD>(
    new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
  )

  React.useEffect(() => {
    fetch('/IQArrowsSolver/grids.json')
      .then(data => data.json())
      .then(json => {
        setGrids(json)
      })
    if (window.location.search.length > 0) {
      const search = window.location.search.substring(1)
      const params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

      setGrid(grid => grid.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          const key = `${rowIndex}c${cellIndex}`
          const dir = parseInt(params[key])
          if (key in params && dir in DIRECTIONS) {
            return ([dir, ''] as any)
          }
          return cell
        })
      }))
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
    const query = Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&')
    const href = `/${query !== '' ? `?${query}` : '' }`
    Router.push(href, href, {
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
        <title>IQ Arrows Solver</title>
      </Head>
      <BoardInput
        grid={grid}
        setGrid={onGridChange}
      />
      {grids === null
        ? <p>Loading...</p>
        : (
          <div className={styles.grids}>
            {solutions.slice(0,50).map((grid, i) => (
              <Board
                key={i}
                grid={grid}
              />
            ))}
              {solutions.length > 50 && (
                <p className={styles.firstResults}>Only displaying first 50 results</p>
            )}
          </div>
        )
      }
    </div>
  )
}
