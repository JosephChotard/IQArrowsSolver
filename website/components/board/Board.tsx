import { COLOURS, DIRECTIONS } from '@components/board/boardInput/Board.model'
import React from 'react'
import styles from './Board.module.scss'
import Cell from './cell/Cell'

export type BoardProps = {
  grid: [DIRECTIONS, COLOURS][][]
}

export default function Board({grid}: BoardProps) {
  return (
    <div className={styles.board}>
      {grid.map((row, rowIndex) => {
        return row.map((cell, columnIndex) => (
          <div key={columnIndex} className={styles.cell}>
            <div className={styles.innerCell}>
              <Cell
                direction={cell[0]}
                colour={cell[1]}
                />
            </div>
          </div>
        ))
      })
    }
    </div>
  )
}