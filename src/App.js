"use client"

import { motion } from "framer-motion"

export default function Page() {
  return ( 
    <div>

      <div style={{height:"120vh"}}></div>

      <div
        style={{
          height:500,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:10,
          background:"white"
        }}
      >

        <motion.div
          initial={{x:0, opacity:0}}
          whileInView={{x:-50, opacity:1}}
          exit={{x:0, opacity:0}}
          viewport={{amount:0.4}}
          transition={{duration:0.6, delay:0}}
        >
          <h2>Banking Made Simple</h2>
          <p>Control everything from your phone.</p>
        </motion.div>

        <motion.img
          src="/image.png"
          style={{width:800}}
          initial={{x:0, opacity:0}}
          whileInView={{x:50, opacity:1}}
          viewport={{amount:0.4}}
          transition={{duration:0.6, delay:0}}
        />

      </div>

      <div style={{height:"120vh"}}></div>

    </div>
  )
}
