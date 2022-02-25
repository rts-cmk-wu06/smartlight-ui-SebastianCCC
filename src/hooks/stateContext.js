import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [roomState, setRoomState] = useState(true)
  const [title, setTitle] = useState({ h: 'Back', b: '' })
  const [colorTransparent, setColorTransparent] = useState({ x: 0 })

  const value = useMemo(
    () => ({ roomState, setRoomState, title, setTitle, colorTransparent, setColorTransparent }),
    [roomState, title, colorTransparent]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
