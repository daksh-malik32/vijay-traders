export default function Chicken({ className = '' }) {
  return <svg className={className} viewBox="0 0 440 470" role="img" aria-label="Illustration of a friendly white chicken">
    <defs>
      <linearGradient id="body" x1=".2" y1=".1" x2=".8" y2=".9"><stop stopColor="#fffef8"/><stop offset=".58" stopColor="#f2eadb"/><stop offset="1" stopColor="#d9cdb8"/></linearGradient>
      <linearGradient id="wing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fffdf6"/><stop offset="1" stopColor="#e3d6c1"/></linearGradient>
      <linearGradient id="comb" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#df7660"/><stop offset="1" stopColor="#aa4f3c"/></linearGradient>
      <radialGradient id="shade"><stop stopColor="#776b55" stopOpacity=".28"/><stop offset="1" stopColor="#776b55" stopOpacity="0"/></radialGradient>
      <filter id="soft"><feGaussianBlur stdDeviation="7"/></filter>
    </defs>
    <ellipse cx="221" cy="424" rx="155" ry="24" fill="url(#shade)" filter="url(#soft)"/>
    <path d="M121 301c-6-56 27-130 101-145 77-16 155 29 166 103 11 75-46 134-125 143-74 9-135-32-142-101Z" fill="url(#body)" stroke="#e8dfcf" strokeWidth="3"/>
    <path d="M149 294c29-51 101-72 153-42 35 21 42 60 23 91-24 39-88 59-139 35-37-18-54-52-37-84Z" fill="url(#wing)" stroke="#e7ddcc" strokeWidth="2"/>
    <path d="M170 319c35-31 71-42 109-32M181 341c32-22 64-29 97-21" fill="none" stroke="#d8cbb6" strokeWidth="4" strokeLinecap="round" opacity=".58"/>
    <path d="M151 197c-31-10-54-44-41-76 11-26 40-39 57-20 9-30 42-39 59-17 15 20 5 47-9 60-19 18-39 42-66 53Z" fill="url(#comb)"/>
    <path d="M171 196c-20-70 7-146 71-159 46-10 88 20 100 62 12 42-8 88-46 111-39 24-88 18-125-14Z" fill="url(#body)" stroke="#e8dfcf" strokeWidth="3"/>
    <path d="M322 251c20 8 31 27 24 44-7 17-29 22-48 12 2-23 10-42 24-56Z" fill="#d6bd94"/>
    <circle cx="289" cy="154" r="11" fill="#3d392f"/><circle cx="292" cy="150" r="3.4" fill="#fff"/>
    <path d="M343 187c40 4 59 26 44 48-15 22-43 17-61 6 12-17 17-35 17-54Z" fill="url(#comb)"/>
    <path d="M203 403v22m41-20v21" stroke="#b78045" strokeWidth="9" strokeLinecap="round"/><path d="M192 425h29m12 1h30" stroke="#a9773d" strokeWidth="7" strokeLinecap="round"/>
    <path d="M175 107c10-30 35-49 64-53" stroke="#fff" strokeWidth="9" strokeLinecap="round" opacity=".65" fill="none"/>
  </svg>
}
