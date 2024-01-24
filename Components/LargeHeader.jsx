

const LargeHeader = ({  customLetter, headerText }) => {
  return (
    <h1 className="text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[.8]"><span className="p leading-[.6] lg:leading-[.8] text-[7rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">{customLetter}</span>{headerText}</h1>
  )
}

export default LargeHeader