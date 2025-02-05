"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SocialLinks } from "./components/SocialLinks"

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)

  const skills = ["JavaScript", "React", "Node.js", "NextJS", "Golang", "Docker", "DevOps", "Data Analyst", "Database Managment"]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-400 to-orange-600">
      <motion.div
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-80 h-96 relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full absolute backface-hidden"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://api.cdn.fabrzy.dev/pfp-bucket/jpg-files/pfpfabio2.jpg"
              alt="Fabio Espinoza"
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl scale-150" // Zoom in by 25%
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h1 className="text-2xl font-bold">Fabio Espinoza</h1>
              <p>Software Developer</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full absolute backface-hidden bg-white p-6"
            initial={false}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">
              I'm a passionate developer with a love for creating software and educating / learning from others
            </p>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.p
        className="mt-8 text-white text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Click on me to see more information!
      </motion.p>
      <SocialLinks />
    </main>
  )
}

