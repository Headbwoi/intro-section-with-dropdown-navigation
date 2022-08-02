import AudiophileIcon from "../icons/AudiophileIcon"
import DatabizIcon from "../icons/DatabizIcon"
import MakerIcon from "../icons/MakerIcon"
import MeetIcon from "../icons/MeetIcon"

const Clients = () => {
  return (
    <div className="flex items-center justify-between mb-32 lg:space-x-10 lg:w-[30rem]">
      <DatabizIcon />
      <AudiophileIcon />
      <MeetIcon />
      <MakerIcon />
    </div>
  )
}

export default Clients
