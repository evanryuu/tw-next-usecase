'use client'

import useDark from '../hooks/useDark'

export default function Toggler() {
  const { toggleDark } = useDark()
  return <button className='text-3xl font-bold' onClick={toggleDark}>Toggle</button>
}
