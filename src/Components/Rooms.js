import { useContext } from 'react'
import { StateContext } from '../hooks/stateContext'

const Rooms = ({ title, dec, icon }) => {
  const { roomState, setRoomState } = useContext(StateContext)
  console.log(roomState)
  return (
    <article className="bg-white rounded-xl p-5 shadow-lg" onClick={() => setRoomState(false)}>
      {icon}
      <h3 className="pt-5 pb-1">{title}</h3>
      <p className="text-orange">{dec}</p>
    </article>
  )
}

export default Rooms
