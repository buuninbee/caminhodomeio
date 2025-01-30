import { motion } from "motion/react"

const Title = ({title}) => {
  return (
    <motion.h2 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2,
        delay: 1.8,
        ease: [0, 0.71, 0.2, 1.01],
    }}
    viewport={{once: true}}
    className="font-sans text-2xl text-primary pb-2 after:block after:w-8 after:h-[2px] after:relative after:right-2 after:bottom-1 after:bg-segundary sm:text-4xl">{title}</motion.h2>
  )
}

export default Title