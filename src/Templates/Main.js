//import packages
import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'

//import States
import { StateContext } from '../hooks/stateContext'

//import components
import Rooms from '../Components/Rooms'
import ColorSettings from '../Components/ColorSettings'

//import data
import rooms from '../data/db'
import Dragslider from '../Components/Slider'

const RoomsCategory = () => {
  /*   const { setTitle } = useContext(StateContext) */

  let { roomid } = useParams()

  console.log(roomid)
  return (
    <main className="bg-lightgray rounded-t-3xl p-6 sticky top-0 min-h-[100vh]">
      <h2 className="text-darkblue">{roomid ? 'Intensity' : 'All Rooms'}</h2>
      {roomid ? (
        <>
          <Dragslider />
          <ColorSettings />
        </>
      ) : (
        <section className="pt-6 inline-grid grid-cols-2 gap-4 w-full">
          {rooms.map((room, i) => (
            <NavLink to={`/home/${i}`} key={i}>
              {
                <Rooms
                  key={i}
                  title={`${room.title.h} ${room.title.b}`}
                  lights={room.lights}
                  icon={room.icon}
                />
              }
            </NavLink>
          ))}
        </section>
      )}
    </main>
  )
}

export default RoomsCategory
