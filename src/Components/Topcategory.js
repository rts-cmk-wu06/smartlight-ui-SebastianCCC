const Topcategory = ({ title, span }) => {
  return (
    <h1 className="text-lg text-white">
      {title.replace(/\s+/g, '')}
      <span className="font-light">{span}</span>
    </h1>
  )
}

export default Topcategory
