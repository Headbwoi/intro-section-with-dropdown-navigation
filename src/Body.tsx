import MainImage from "./components/MainImage"
import MainText from "./components/MainText"

const Main = () => {
  return (
    <main className="">
      <div className=" flex items-start justify-center flex-col-reverse lg:flex-row lg:space-x-[8.75rem] xl:space-x-[9.25rem]">
        <MainText
          title="Make remote work"
          paragraph={`Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.`}
        />
        <MainImage />
      </div>
    </main>
  )
}

export default Main
