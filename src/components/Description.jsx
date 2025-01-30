import { motion } from "motion/react"

const Description = ({description}) => {
  return (
    <motion.p 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2.3,
        delay: 1.8,
        ease: [0, 0.71, 0.2, 1.01],
    }} 
    viewport={{once: true}}
    className="text-primary leading-tight text-lg sm:text-xl lg:text-2xl">{description}</motion.p>
  )
}

export default Description