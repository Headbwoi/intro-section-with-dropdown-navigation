import Clients from "./Clients"

type Props = {
  title: string
  paragraph: string
}
const MainText = (props: Props) => {
  return (
    <div className="px-5 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:w-[22.875rem] mb-8 lg:mb-[4.1875rem] mt-32">
        {props.title}
      </h1>
      <p className="text-base lg:text-lg lg:max-w-[24.875rem] text-Medium_Gray font-medium mb-8 lg:mb-14">
        {props.paragraph}
      </p>

      <button className="w-[8.625rem] h-[3.125rem] lg:w-[10.25rem] lg:h-14 grid place-items-center hover:border-2 bg-Almost_Black hover:bg-Almost_White rounded-xl text-white font-medium hover:text-Almost_Black hover:border-Medium_Gray duration-500 mx-auto lg:mx-0 mb-12 lg:mb-28">
        <a href="/" className="font-bold text-lg lg:text-xl capitalize">
          Learn More
        </a>
      </button>

      <Clients />
    </div>
  )
}

export default MainText
