import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Handshake, MessagesSquare, Sprout, Phone, MessageCircle, Check, Menu as MenuIcon } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Chicken from './components/Chicken.jsx'
import ChickenButton from './components/ChickenButton.jsx'

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [.22, 1, .36, 1] } } }
const services = [
  { n: '01', icon: Sprout, title: 'Poultry bird sourcing', text: 'Helping farmers find suitable poultry birds through connections with other farmers.' },
  { n: '02', icon: Handshake, title: 'Farmer connections', text: 'Connecting poultry farmers looking to buy and sell chickens.' },
  { n: '03', icon: MessagesSquare, title: 'Trading coordination', text: 'Facilitating communication and coordination between buyers and sellers.' },
]
const reasons = ['Direct farmer connections', 'Personal communication', 'Trading assistance', 'Farmer-focused approach']

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  return <div onPointerMove={e => setPointer({ x: (e.clientX / window.innerWidth - .5) * 8, y: (e.clientY / window.innerHeight - .5) * 8 })}>
    <Navbar/>
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><motion.div initial="hidden" animate="visible" variants={reveal}>
          <span className="eyebrow"><span className="eyebrow-dot"/> TRUSTED POULTRY TRADING</span>
          <h1>Connecting farmers.<br/><em>Growing</em> opportunities.</h1>
          <p className="hero-intro">Vijay Traders helps connect poultry farmers, making chicken trading and farmer-to-farmer coordination simpler and more accessible.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Contact us <ArrowRight size={17}/></a><a className="button button-light" href="https://wa.me/919896390857" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a></div>
          <div className="hero-footnote"><span className="avatars"><i>V</i><i>F</i><i>+</i></span><span>Farmer-to-farmer connections<br/><b>Built on clear communication</b></span></div>
        </motion.div></div>
        <div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="sun-disc"/><div className="hero-plant plant-left">✳</div><div className="hero-plant plant-right">✳</div>
          <motion.div className="hero-chicken" animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ x: pointer.x, rotateY: pointer.x * 1.2 }}><Chicken/></motion.div>
          <div className="art-caption"><span>PERSONAL CONNECTIONS</span><span className="caption-line"/><span>MADE SIMPLE</span></div><div className="art-index">01 <span>/</span> 04</div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16}/></a><span className="hero-vertical">POULTRY TRADING · FARMER CONNECTIONS</span>
      </section>

      <section className="intro section-pad" id="about"><div className="section-kicker">01 <span>—</span> A PERSONAL APPROACH</div><motion.div className="intro-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal}>
        <div className="intro-art"><div className="intro-photo"><Chicken/><span className="image-stamp">VT <small>TRADERS</small></span></div><div className="intro-side-note">A better way to<br/>make the connection.</div></div>
        <div className="intro-copy"><span className="eyebrow">THE PERSON BEHIND THE CONNECTIONS</span><h2>Meet <em>Virender Malik</em></h2><p>Behind Vijay Traders is Virender Malik, helping poultry farmers connect with potential buyers and sellers for poultry bird trading.</p><p>With a focus on personal communication and farmer-to-farmer connections, Vijay Traders aims to make poultry trading and coordination simpler.</p><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
      </motion.div></section>

      <section className="services section-pad" id="services"><div className="section-heading"><div><div className="section-kicker">02 <span>—</span> HOW WE HELP</div><h2>What we <em>do</em></h2></div><p>Thoughtful connections and clear communication for every step of poultry trading.</p></div>
        <div className="service-grid">{services.map((s, i) => { const Icon = s.icon; return <motion.article className="service-card" key={s.n} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} transition={{ delay: i * .12 }} whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}>
          <div className="card-top"><span>{s.n} / 03</span><ArrowUpRight size={18}/></div><div className="service-icon"><Icon strokeWidth={1.5}/><span className="icon-orbit"/></div><h3>{s.title}</h3><p>{s.text}</p><div className="card-bottom"><span>VIJAY TRADERS</span><span className="card-arrow"><ArrowRight size={15}/></span></div>
        </motion.article> })}</div>
      </section>

      <section className="why section-pad"><div className="why-top"><div className="section-kicker">03 <span>—</span> THE WAY WE WORK</div><div className="why-layout"><div className="why-title"><h2>Building connections<br/>in poultry <em>trading.</em></h2><p>Good trading starts with a conversation. We make those conversations easier to begin.</p></div><div className="reason-list">{reasons.map((x,i)=><motion.div className="reason" key={x} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay:i*.08 }}><span className="reason-num">0{i+1}</span><span className="reason-name">{x}</span><Check size={17}/></motion.div>)}</div></div></div><div className="why-bottom"><span>GOOD CONNECTIONS BEGIN WITH A CONVERSATION.</span><span>VIJAY TRADERS <span className="tiny-star">✳</span> VIRENDER MALIK</span></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-panel"><div className="contact-decoration"><div className="contact-ring ring-a"/><div className="contact-ring ring-b"/><span>VT</span></div><div className="contact-content"><div className="section-kicker">04 <span>—</span> LET'S CONNECT</div><h2>Have a poultry<br/><em>trading enquiry?</em></h2><p>Looking to buy or sell poultry birds? Connect with Vijay Traders. We are here to help you connect with poultry farmers.</p><div className="contact-person"><div className="person-avatar">VM</div><div><b>Virender Malik</b><span>Vijay Traders</span></div><a href="tel:+919896390857" aria-label="Call Virender Malik"><ArrowUpRight size={18}/></a></div><div className="contact-buttons"><a className="button button-gold" href="tel:+919896390857"><Phone size={17}/> Call now</a><a className="button button-wa" href="https://wa.me/919896390857" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div><a className="phone-number" href="tel:+919896390857">+91 98963 90857 <ArrowUpRight size={14}/></a></div><div className="contact-side"><div className="contact-side-quote">“Every good connection<br/>starts with a hello.”</div><Chicken/><div className="side-caption">HERE TO HELP FARMERS CONNECT</div></div></div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">VT</span><span>Vijay Traders<small>POULTRY CONNECTIONS</small></span></a><span className="footer-owner">Virender Malik <i>·</i> <a href="tel:+919896390857">+91 98963 90857</a></span><div className="footer-links">{[['Home','#home'],['About','#about'],['Services','#services'],['Contact','#contact']].map(([x,y])=><a key={x} href={y}>{x}</a>)}<a href="https://wa.me/919896390857" target="_blank" rel="noreferrer">WhatsApp</a></div><div className="footer-bottom"><span>© 2026 Vijay Traders. All Rights Reserved.</span><span>MADE FOR FARMER CONNECTIONS <span className="tiny-star">✳</span></span></div></footer>
    <ChickenButton/>
  </div>
}
export default App
