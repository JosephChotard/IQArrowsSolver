import React from 'react'
import { BOARD, DIRECTIONS } from '@components/board/boardInput/Board.model'
import applyConstraintToGrid from 'lib/applyConstraintToGrid'
import Board from '@components/board/Board'
import Router from 'next/router'
import constraintToQuery from 'lib/constraintToQuery'
import windowLocationToConstraint from 'lib/windowLocationToConstraint'
import styles from './Problems.module.scss'
import Link from 'next/link'

const WIDTH = 6
const HEIGHT = 3

export default function Problems() {
  const [grid, setGrid] = React.useState<BOARD>(null)

  const generateNewPuzzle = (replace=false) => {
    setGrid(null)
    const g = new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
    const givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    fetch(`${process.env.basePath ? process.env.basePath : ''}/constraints/constraints-${givenCells}.txt`)
      .then(data => data.text())
      .then(constraintsText => {
        const constraints = constraintsText.split(/\r\n|\r|\n/)
        const selectedConstraintIndex = Math.floor(Math.random() * (constraints.length - 1 + 1))
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
        setGrid(applyConstraintToGrid(g, parsedConstraint))

        // Set the url
        const href = `/problems/${constraintToQuery(parsedConstraint)}`
        if (replace) {
          Router.replace(href, href, {
            shallow: true,
          })
        } else {
          Router.push(href, href, {
            shallow: true,
          })
        }
      })
  }

  React.useEffect(() => {
    if (window.location.search.length !== 0) {
      const g = new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
      const params = windowLocationToConstraint()

      setGrid(applyConstraintToGrid(g, params))
      return
    }
    generateNewPuzzle(true)
  }, [])

  return (
    <div className={styles.problems}>
      <h1>Here is a brand new puzzle for you to solve</h1>
      <p>As always, there is only one possible solution. You can find it 
       <Link href={`/${window.location.search}`}>
          <a className={styles.solutionLink}>here</a>
        </Link>
      </p>
      <div>
        {grid === null
          ? <div className={`${styles.loading} ${styles.board}`}>
            {[...new Array(WIDTH * HEIGHT)].map((_, i) => (
              <div key={i} className={styles.cell}></div>
            ))}
          </div>
          : <div>
            <Board
              grid={grid}
            />
          </div>
        }
      </div>
      <div className={styles.generateNewPuzzle}>
        <button onClick={() => generateNewPuzzle()} className={styles.generateNewPuzzleButton}>
          Generate puzzle
        </button>
      </div>
    </div>
  )
}