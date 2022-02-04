import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [roomState, setRoomState] = useState('')

  const value = useMemo(() => ({ roomState, setRoomState }), [roomState])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
