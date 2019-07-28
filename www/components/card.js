import { css } from 'linaria'
import { motion } from 'framer-motion'

const variants = {
  visible: {
    opacity: 1
  },
  hidden: { opacity: 0 }
}

const styles = css`
  background: white;
  border-radius: 9px;
  box-shadow: 0 0 21px rgba(0, 0, 0, 0.25);
  padding: 34px;
`

const Card = ({ children, ...rest }) => {
  return (
    <motion.section
      positionTransition
      initial="hidden"
      animate="visible"
      variants={variants}
      className={styles}
      {...rest}
    >
      {children}
    </motion.section>
  )
}

export default Card
