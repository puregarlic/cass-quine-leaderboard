import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Card from './card'
import { Form, Label, NumInput, Submit } from './form'

const calculate = (cool, size, time) => cool * 70000 - (size * 500 + time)

export default () => {
  const initialCool = process.browser
    ? Number(window.localStorage.getItem('cool'))
    : null
  const initialSize = process.browser
    ? Number(window.localStorage.getItem('size'))
    : null
  const initialTime = process.browser
    ? Number(window.localStorage.getItem('time'))
    : null
  const [score, setScore] = useState(null)
  const [cool, setCool] = useState(initialCool)
  const [size, setSize] = useState(initialSize)
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    window.localStorage.setItem('cool', cool)
  }, [cool])

  useEffect(() => {
    window.localStorage.setItem('size', size)
  }, [size])

  useEffect(() => {
    window.localStorage.setItem('time', time)
  }, [time])

  return (
    <motion.div style={{ gridArea: 'calc', display: 'grid' }}>
      <motion.div
        style={{ position: 'sticky', top: '21px', height: 'fit-content' }}
      >
        <Card>
          <h1 style={{ margin: '0' }}>Score Calculator</h1>
          <Form
            onSubmit={e => {
              e.preventDefault()
              setScore(
                calculate(
                  parseInt(cool, 10),
                  parseInt(size, 10),
                  parseInt(time, 10)
                )
              )
            }}
          >
            <Label>
              Speed (ms)
              <NumInput
                type="number"
                min="0"
                value={time}
                onChange={e => setTime(e.currentTarget.value)}
              />
            </Label>
            <Label>
              Size (Characters)
              <NumInput
                type="number"
                min="0"
                value={size}
                onChange={e => setSize(e.currentTarget.value)}
              />
            </Label>
            <Label>
              Cool
              <NumInput
                type="number"
                min="0"
                value={cool}
                onChange={e => setCool(e.currentTarget.value)}
              />
            </Label>
            <Submit
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              value="Calculate"
            />
          </Form>
        </Card>
        {score !== null && score !== undefined && (
          <Card style={{ textAlign: 'center', marginTop: '21px' }}>
            <AnimatePresence>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  margin: 0,
                  fontSize: '3rem'
                }}
              >
                {score.toLocaleString()}
              </motion.h2>
            </AnimatePresence>
          </Card>
        )}
      </motion.div>
    </motion.div>
  )
}
