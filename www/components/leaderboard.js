import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Card from './card'
import { Table, TableItem, TableHeader } from './table'

export default props => {
  const [scores, setScores] = useState(props.scores)

  const sortScores = type => {
    setScores([...scores].sort((a, b) => a[type] - b[type]))
  }

  return (
    <motion.div style={{ gridArea: 'board' }}>
      <Card>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 800 }}>
          Quine Challenge Leaderboard
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'darkGrey' }}>
          <b style={{ color: 'grey' }}>Not final results.</b> These numbers
          assume a coolness level of 10 and use self-reported numbers, so your
          final rank may be higher or lower due to final testing hardware and
          coolness vote results.
        </p>
        <Table>
          <TableHeader
            onSortByRank={() => sortScores('rank')}
            onSortByScore={() => sortScores('score')}
            onSortByTime={() => sortScores('time')}
            onSortBySize={() => sortScores('size')}
          />
          {scores.map((person, index) => {
            return <TableItem {...person} key={person.name} />
          })}
        </Table>
      </Card>
    </motion.div>
  )
}
