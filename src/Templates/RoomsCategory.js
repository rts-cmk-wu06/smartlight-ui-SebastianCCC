import Rooms from '../Components/Rooms'

//import icons
import Bedicon from '../Components/Bedicon'

const RoomsCategory = () => {
  const rooms = [
    {
      title: 'title1',
      dec: 'dec1',
      icon: <Bedicon />,
    },
    {
      title: 'title2',
      dec: 'dec2',
      icon: <Bedicon />,
    },
    {
      title: 'title3',
      dec: 'dec3',
      icon: <Bedicon />,
    },
  ]
  return (
    <main className="bg-lightgray rounded-t-3xl p-6">
      <h2 className="pb-6">Rooms</h2>
      <section className="inline-grid grid-cols-2 gap-4 w-full">
        {rooms.map((room, i) => (
          <Rooms key={i} title={room.title} dec={room.dec} icon={room.icon} />
        ))}
      </section>
    </main>
  )
}

export default RoomsCategory
