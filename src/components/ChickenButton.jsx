import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Chicken from './Chicken.jsx'

export default function ChickenButton() {
  const audio = useRef(null)
  const [bump, setBump] = useState(false)
  const play = () => {
    setBump(true); window.setTimeout(() => setBump(false), 400)
    if (!audio.current) audio.current = new Audio('/sounds/chicken-cluck.wav')
    audio.current.currentTime = 0; audio.current.play().catch(() => {})
  }
  return <><audio ref={audio} src="/sounds/chicken-cluck.wav" preload="none"/><motion.button className={`cluck-button ${bump ? 'bump' : ''}`} whileTap={{ scale: .9 }} onClick={play} aria-label="Play chicken cluck sound"><Chicken/><span className="cluck-tip">Make me cluck!</span></motion.button></>
}
