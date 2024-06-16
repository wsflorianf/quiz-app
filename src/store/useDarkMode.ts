import { create } from 'zustand'

interface DarkModeTypes {
  darkMode: boolean
  changeDarkMode: () => void
}

const useDarkMode = create<DarkModeTypes>()((set) => ({
  darkMode: false,
  changeDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))

export default useDarkMode;
