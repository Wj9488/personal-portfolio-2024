

const SmallHeader = ({  customLetter, headerText }) => {
  return (
    <h3 className="text-[3.25rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] leading-[1] my-[2.5rem]"><span className="p text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem]">{customLetter}</span>{headerText}</h3>
  )
}

export default SmallHeader