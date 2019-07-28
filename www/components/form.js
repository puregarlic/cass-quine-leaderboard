import { styled } from 'linaria/react'
import { motion } from 'framer-motion'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  font-weight: 700;
`

export const NumInput = styled.input`
  border-radius: 9px;
  margin-top: 5px;
  border: 2px solid gainsboro;
  padding: 13px;
  font-size: 1rem;
`

export const Submit = styled(motion.input)`
  border-radius: 9px;
  border: 2px solid grey;
  margin-top: 21px;
  background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  padding: 13px;
  font-size: 1rem;
  font-weight: 700;
`
