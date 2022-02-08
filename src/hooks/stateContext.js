import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [roomState, setRoomState] = useState(true)
  const [title, setTitle] = useState('Control')
  const [spantitle, setSpanTitle] = useState('Panel')

  const value = useMemo(
    () => ({ roomState, setRoomState, title, setTitle, spantitle, setSpanTitle }),
    [roomState, title, spantitle]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
