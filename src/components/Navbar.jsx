import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><a className="brand" href="#home" aria-label="Vijay Traders home"><span className="brand-mark">VT</span><span>Vijay Traders<small>POULTRY CONNECTIONS</small></span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="https://wa.me/919896390857" target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
  </header>
}
