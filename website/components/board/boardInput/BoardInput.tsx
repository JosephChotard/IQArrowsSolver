import React from 'react'
import CellInput from './cellInput/CellInput'
import styles from './BoardInput.module.scss'
import { COLOURS, DIRECTIONS } from './Board.model'

export type BoardInputProps = {
  grid: [DIRECTIONS, COLOURS][][],
  setGrid: (g: [DIRECTIONS, COLOURS][][]) => void
}
export default function BoardInput({ grid, setGrid }: BoardInputProps) {
  
  const handleClick = (direction: DIRECTIONS, row: number, column: number) => {
    setGrid(grid.map((r, rowIndex) => {
      if (rowIndex !== row) {
        return r
      }
      return r.map((c, columnIndex) => {
        if (columnIndex !== column) {
          return c
        }
        return [direction, COLOURS.NONE]
      })
    }))
  }

  return (
    <div className={styles.boardInput}>
      {grid.map((row, rowIndex) => 
      {
        return row.map((cell, columnIndex) => (
          <div className={styles.cell} key={columnIndex}>
            <div className={styles.innerCell}>
              <CellInput
                direction={cell[0]}
                onClick={direction => handleClick(direction, rowIndex, columnIndex)}
                />
            </div>
          </div>
        ))}
      )}
    </div>
  )
}