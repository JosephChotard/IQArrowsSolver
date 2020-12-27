import React from 'react'
import CellInput from './cellInput/CellInput'
import styles from './BoardInput.module.scss'
import { DIRECTIONS } from './Board.model'

export default function BoardInput() {
  const width = 6
  const height = 3

  const [grid, setGrid] = React.useState(new Array(height).fill(DIRECTIONS.NONE).map(() => new Array(width).fill(DIRECTIONS.NONE)))

  const handleClick = (direction: DIRECTIONS, row: number, column: number) => {
    setGrid(grid => grid.map((r, rowIndex) => {
      if (rowIndex !== row) {
        return r
      }
      return r.map((c, columnIndex) => {
        if (columnIndex !== column) {
          return c
        }
        return direction
      })
    }))
  }

  React.useEffect(() => {
    console.log(grid)
  }, [grid])

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, columnIndex) => (
            <div key={columnIndex} className={styles.cell}>
              <CellInput
                direction={cell}
                onClick={direction => handleClick(direction, rowIndex, columnIndex)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}