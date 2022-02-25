const Topcategory = ({ title, span }) => {
  return (
    <div className="text-white pl-3 text-sm w-[100px]">
      <h1 className="leading-none">
        {title.replace(/\s+/g, '')} {span}
      </h1>
    </div>
  )
}

export default Topcategory
