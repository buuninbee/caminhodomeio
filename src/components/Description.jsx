import { motion } from "motion/react"

const Description = ({description}) => {
  return (
    <motion.p initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2.3,
        delay: 1.8,
        ease: [0, 0.71, 0.2, 1.01],
    }} className="text-primary leading-tight text-lg">{description}</motion.p>
  )
}

export default Description