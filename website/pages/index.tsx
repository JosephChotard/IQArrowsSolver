import React from 'react'
import { BOARD, DIRECTIONS } from '@components/board/boardInput/Board.model'
import applyConstraintToGrid from 'lib/applyConstraintToGrid'
import Board from '@components/board/Board'
import Router from 'next/router'
import constraintToQuery from 'lib/constraintToQuery'
import windowLocationToConstraint from 'lib/windowLocationToConstraint'
import styles from './Index.module.scss'
import Link from 'next/link'
import Head from 'next/head'

const WIDTH = 6
const HEIGHT = 3

export default function Index() {
  const [grid, setGrid] = React.useState<BOARD>(null)

  const generateNewPuzzle = (replace=false) => {
    setGrid(null)
    const g = new Array(HEIGHT).fill(DIRECTIONS.NONE).map(() => new Array(WIDTH).fill([DIRECTIONS.NONE, '']))
    const givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    fetch(`${process.env.NEXT_PUBLIC_basePath ? process.env.NEXT_PUBLIC_basePath : ''}/constraints/constraints-${givenCells}.txt`)
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
        const href = `${constraintToQuery(parsedConstraint)}`
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
    if (typeof window === 'undefined') {
      return
    }
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
      <Head>
        <title>IQ Arrows Logic Puzzle Generator</title>
      </Head>
      <h1>IQ Arrows Logic Puzzle Generator</h1>
      <h2>Over 5000 challenges for you to attempt</h2>
      <p>As always, there is only one
       possible <Link href={`/solutions/${typeof window !== 'undefined'? window.location.search : ''}`}>
          <a className={styles.solutionLink}>solution</a>
        </Link>.
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
          Generate new puzzle
        </button>
      </div>
    </div>
  )
}