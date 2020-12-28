import React from 'react'
import Link from 'next/link'
import { BOARD, DIRECTIONS } from '@components/board/boardInput/Board.model'
import applyConstraintToGrid from 'lib/applyConstraintToGrid'
import Board from '@components/board/Board'

const WIDTH = 6
const HEIGHT = 3

export default function Problems() {
  const [grid, setGrid] = React.useState<BOARD>(null)

  React.useEffect(() => {
    const givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    fetch(`${process.env.basePath ? process.env.basePath : ''}/constraints/constraints-${givenCells}.txt`)
      .then(data => data.text())
      .then(constraintsText => { 
        const g = new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
        const constraints = constraintsText.split(/\r\n|\r|\n/)
        const selectedConstraintIndex = Math.floor(Math.random() * (constraints.length - 1 + 1));
        const selectedConstraint = constraints[selectedConstraintIndex]
        const parsedConstraintArray = selectedConstraint
          .substring(1, selectedConstraint.length - 2)
          .split('), ')
          .map(kvPair => kvPair
            .substring(1)
            .split('): (')
            .map(pair => pair.split(', '))
        )
        let parsedConstraint = {}
        parsedConstraintArray.forEach(constraint => {
          parsedConstraint[`${constraint[0][0]}c${constraint[0][1]}`] = constraint[1][0]
        })
        setGrid(applyConstraintToGrid(new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, ''])), parsedConstraint))
       })
  }, [])

  return (
    <div>
      Solve this problem
      <div>
        {grid === null
          ? <p>Loading...</p>
          : <div>
            <Board
              grid={grid}
            />
          </div>
        }
      </div>
      <Link href='/problems/yes'>
        <a>
          Generate puzzle
        </a>
       </Link>
    </div>
  )
}