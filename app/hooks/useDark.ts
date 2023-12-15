import { useEffect, useState } from "react"
import { isBrowser } from "../utils/isBrowser"

function getSystemDark() {
  if (isBrowser) {
    // dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}
export default function useDark() {
  const [dark, setDark] = useState(getSystemDark())

  if (isBrowser) {
    const qm = window.matchMedia('(prefers-color-scheme: dark)')
    qm.addEventListener('change', () => setDark(qm.matches)) // track system preferences
  }

  const toggleDark = () => setDark(!dark)

  useEffect(() => {
    if (typeof window !== undefined) {
      if (dark) {
        window.document.documentElement.classList.add('dark')
      } else {
        window.document.documentElement.classList.remove('dark')
      }
    }
  }, [dark])
  return { dark, toggleDark }
}
