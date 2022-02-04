import { useState } from 'react'
import Lightbulb from '../Components/Lightbulb'
import Topcategory from '../Components/Topcategory'

const Topview = () => {
  const [title, setTitle] = useState('Control')
  const [spantitle, setSpanTitle] = useState('Panel')
  return (
    <header className="items-center justify-between flex first:px-5">
      <Topcategory title={title} span={spantitle} />
      <Lightbulb />
    </header>
  )
}

export default Topview
