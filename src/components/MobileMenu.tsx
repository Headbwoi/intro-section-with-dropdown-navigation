import { useState } from "react"
import IconCalender from "../svgComponents/IconCalender"
import IconCloseMenu from "../svgComponents/IconCloseMenu"
import IconDown from "../svgComponents/IconDown"
import IconPlanning from "../svgComponents/IconPlanning"
import IconReminders from "../svgComponents/IconReminders"
import IconTodo from "../svgComponents/IconTodo"
import IconUp from "../svgComponents/IconUp"

interface Props {
  openMenu: boolean | any
  setOpenMenu: boolean | any
}

const MobileMenu = ({ openMenu, setOpenMenu }: Props) => {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)

  return (
    // mobile menu
    <div className="mobile-menu w-screen absolute top-0 right-0 bg-Medium_Gray/50 h-[48.75rem] lg:hidden">
      <div className="absolute right-0 w-[64.53%] min-h-full bg-white pt-5 px-6">
        <div className="flex mb-8 close">
          <div
            className="ml-auto cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <IconCloseMenu />
          </div>
        </div>
        <div className="flex items-start justify-start flex-col space-y-7 mb-10">
          {/* features */}
          <div>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setOpenFeatures(!openFeatures)}
            >
              <a href="#" className="font-medium mr-2 text-Medium_Gray">
                Features
              </a>
              {openFeatures ? <IconUp /> : <IconDown />}
            </span>
            {openFeatures && (
              <div className="pl-6 space-y-5 block mt-7">
                <span className="flex items-center cursor-pointer">
                  <IconTodo />
                  <p className="pl-4 capitalize font-medium text-Medium_Gray">
                    todo list
                  </p>
                </span>
                <span className="flex items-center cursor-pointer">
                  <IconCalender />
                  <p className="pl-4 capitalize font-medium text-Medium_Gray">
                    calender
                  </p>
                </span>
                <span className="flex items-center cursor-pointer">
                  <IconReminders />
                  <p className="pl-4 capitalize font-medium text-Medium_Gray">
                    reminders
                  </p>
                </span>
                <span className="flex items-center cursor-pointer">
                  <IconPlanning />
                  <p className="pl-4 capitalize font-medium text-Medium_Gray">
                    planning
                  </p>
                </span>
              </div>
            )}
          </div>

          {/* company */}
          <div>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setOpenCompany(!openCompany)}
            >
              <a href="#" className="font-medium mr-2 text-Medium_Gray">
                Company
              </a>
              {openCompany ? <IconUp /> : <IconDown />}
            </span>
            {openCompany && (
              <div className="pl-6 space-y-5 block mt-7">
                <p className="capitalize font-medium text-Medium_Gray cursor-pointer">
                  history
                </p>
                <p className="capitalize font-medium text-Medium_Gray cursor-pointer">
                  our team
                </p>
                <p className="capitalize font-medium text-Medium_Gray cursor-pointer">
                  blog
                </p>
              </div>
            )}
          </div>

          <span>
            <a href="/" className="font-medium text-Medium_Gray">
              Careers
            </a>
          </span>
          <span>
            <a href="/" className="font-medium text-Medium_Gray">
              About
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center flex-col space-y-4 ">
          <a href="/">Login</a>
          <a
            href="/"
            className="h-11 w-full grid place-items-center border-2 border-Medium_Gray rounded-xl text-Medium_Gray font-medium"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
