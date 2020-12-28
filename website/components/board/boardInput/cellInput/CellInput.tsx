import React from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleRight, FaArrowAltCircleDown, FaArrowAltCircleLeft, FaQuestionCircle } from 'react-icons/fa'
import {ImArrowUp, ImArrowRight, ImArrowDown, ImArrowLeft} from 'react-icons/im'
import { MdClose } from 'react-icons/md'
import { DIRECTIONS } from '../Board.model'
import styles from './CellInput.module.scss'

export type CellInputProps = {
  onClick: (direction: DIRECTIONS) => void,
  direction: DIRECTIONS
}

export default function CellInput({ onClick, direction }: CellInputProps) {
  
  let SelectedIcon: React.ReactElement = null
  switch (direction) {
    case DIRECTIONS.NONE:
      SelectedIcon = <FaQuestionCircle />
      break
    case DIRECTIONS.UP:
      SelectedIcon = <FaArrowAltCircleUp />
      break
    case DIRECTIONS.DOWN:
      SelectedIcon = <FaArrowAltCircleDown />
      break
    case DIRECTIONS.LEFT:
      SelectedIcon = <FaArrowAltCircleLeft />
      break
    case DIRECTIONS.RIGHT:
      SelectedIcon = <FaArrowAltCircleRight />
      break
  }

  if (direction == DIRECTIONS.NONE) {
    return (
    <div className={styles.cellInput}>
      <button onClick={() => onClick(DIRECTIONS.UP)} className={styles.up}>
        {/* <ImArrowUp /> */}
      </button>
      <button onClick={() => onClick(DIRECTIONS.RIGHT)} className={styles.right}>
        {/* <ImArrowRight /> */}
      </button>
      <button onClick={() => onClick(DIRECTIONS.DOWN)} className={styles.down}>
        {/* <ImArrowDown/> */}
      </button>
      <button onClick={() => onClick(DIRECTIONS.LEFT)} className={styles.left}>
        {/* <ImArrowLeft /> */}
      </button>
      <div className={styles.icons}>
          <ImArrowUp className={styles.upArrow} />
          <ImArrowRight className={styles.rightArrow} />
          <ImArrowDown className={styles.downArrow} />
          <ImArrowLeft className={styles.leftArrow} />
      </div>
    </div>
    )
  }
  return (
    <div className={styles.selectedCell}>
      {SelectedIcon}
      <button className={styles.cancelButton} onClick={() => onClick(DIRECTIONS.NONE)}>
        <MdClose />
      </button>
    </div>
  )
}