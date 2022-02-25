//import packages
import { useContext } from 'react'

//import States
import { StateContext } from '../hooks/stateContext'

const Rooms = ({ title, lights, icon }) => {
  /*   const { roomState, setRoomState } = useContext(StateContext) */
  return (
    <article className="bg-white rounded-3xl p-4 shadow-lg min-w-[150px] text-gray">
      {icon}
      <h3 className="pt-5 pb-1 text-md">{title}</h3>
      <p className="text-orange">
        {lights} {lights == 1 ? 'Light' : 'Lights'}
      </p>
    </article>
  )
}

export default Rooms
