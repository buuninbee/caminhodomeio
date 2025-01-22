import { motion } from "motion/react"

const Line = () => {
  return (
    <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 1.3,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
    }}
    viewport={{once: true}}
    className="h-auto w-[2px] bg-segundary"
    ></motion.span>
  )
}

export default Line