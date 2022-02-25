//import packages
import { useContext } from 'react'
import Slider from 'react-input-slider'

//import States
import { StateContext } from '../hooks/stateContext'

const Dragslider = () => {
  const { colorTransparent, setColorTransparent } = useContext(StateContext)

  return (
    <div>
      <Slider
        styles={{
          track: {
            width: '100%',
            height: '1px',
            backgroundColor: '#CECECE',
          },
          active: {
            backgroundColor: '#FFD339',
          },
          thumb: {
            width: 14,
            height: 14,
          },
        }}
        axis="x"
        x={colorTransparent.x}
        onChange={({ x }) => setColorTransparent((state) => ({ ...state, x }))}
      />
    </div>
  )
}

export default Dragslider
