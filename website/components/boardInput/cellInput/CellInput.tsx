import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineQuestionCircle } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { DIRECTIONS } from '../Board.model'

export type CellInputProps = {
  onClick: (direction: DIRECTIONS) => void,
  direction: DIRECTIONS
}

export default function CellInput({ onClick, direction }: CellInputProps) {
  
  let SelectedIcon: React.ReactElement = null
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
    <div>
      <button onClick={() => onClick(DIRECTIONS.UP)}>
        <AiOutlineArrowUp />
      </button>
      <button onClick={() => onClick(DIRECTIONS.RIGHT)}>
        <AiOutlineArrowRight />
      </button>
      <button onClick={() => onClick(DIRECTIONS.DOWN)}>
        <AiOutlineArrowDown />
      </button>
      <button onClick={() => onClick(DIRECTIONS.LEFT)}>
        <AiOutlineArrowLeft />
      </button>
      <button onClick={() => onClick(DIRECTIONS.NONE)}>
        <ImCross />
      </button>
      {SelectedIcon}
    </div>
  )
}