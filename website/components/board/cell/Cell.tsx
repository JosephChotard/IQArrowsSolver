import React from 'react'
import { AiOutlineQuestionCircle, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { DIRECTIONS, COLOURS } from '../boardInput/Board.model'
import styles from './Cell.module.scss'
export type CellProps = {
  direction: DIRECTIONS, 
  colour: COLOURS,
}

export default function Cell({ direction, colour }: CellProps) {

  let SelectedIcon = null
  switch (direction) {
    case DIRECTIONS.NONE:
      SelectedIcon = <AiOutlineQuestionCircle />
      break
    case DIRECTIONS.UP:
      SelectedIcon = <AiOutlineArrowUp />
      break
    case DIRECTIONS.DOWN:
      SelectedIcon = <AiOutlineArrowDown />
      break
    case DIRECTIONS.LEFT:
      SelectedIcon = <AiOutlineArrowLeft />
      break
    case DIRECTIONS.RIGHT:
      SelectedIcon = <AiOutlineArrowRight />
      break
  }
  return (
    <div className={`${styles[colour]} ${styles.icon}`}>
      {SelectedIcon}
    </div>
  )
}