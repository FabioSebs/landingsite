import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/FabioSebs" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/sebs_coding" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/fabio-espinoza-bb616211b" },
]

export function SocialLinks() {
  return (
    <motion.div
      className="flex space-x-4 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-200 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          <social.icon size={24} />
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </motion.div>
  )
}

