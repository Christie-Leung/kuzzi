const Hero = ({ text2, text1 }: {
  text2: string,
  text1: string,
}) => {

  return (
    <div className="relative justify-start text-left w-max mx-14">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
        {text2}
      </h2>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
        {text1}
      </h1>
    </div>
  )
}

export default Hero;