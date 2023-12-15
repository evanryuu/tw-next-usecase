'use client'

import useDark from "../hooks/useDark"

export default function Toggler() {
  const {toggleDark} = useDark()
  return (
    <button className='block text-xs bg-blue-300' onClick={toggleDark}>Toggle</button>

  )
}
