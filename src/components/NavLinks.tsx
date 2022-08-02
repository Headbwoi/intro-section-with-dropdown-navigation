import { useState } from "react"
import IconCalender from "../icons/IconCalender"
import IconDown from "../icons/IconDown"
import IconPlanning from "../icons/IconPlanning"
import IconReminders from "../icons/IconReminders"
import IconTodo from "../icons/IconTodo"
import IconUp from "../icons/IconUp"

const NavLinks = () => {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)

  return (
    <div className="hidden lg:flex items-center space-x-10">
      {/* features */}
      <div className="relative">
        <span
          className="flex items-center cursor-pointer"
          onClick={() => setOpenFeatures(!openFeatures)}
        >
          <a
            href="#"
            className="font-medium mr-2 text-Medium_Gray hover:text-Almost_Black"
          >
            Features
          </a>
          {openFeatures ? <IconUp /> : <IconDown />}
        </span>
        {openFeatures && (
          <div className="px-6 py-5 flex flex-col justify-between mt-7 absolute top-full right-0 bg-white w-[9.6875rem] h-[10.1875rem] shadow-link rounded-xl">
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
      <div className="relative">
        <span
          className="flex items-center cursor-pointer"
          onClick={() => setOpenCompany(!openCompany)}
        >
          <a
            href="#"
            className="font-medium mr-2 text-Medium_Gray hover:text-Almost_Black"
          >
            Company
          </a>
          {openCompany ? <IconUp /> : <IconDown />}
          {openCompany && (
            <div className="px-6 py-5 flex flex-col justify-between mt-7 absolute top-full left-0 bg-white w-[7.5rem] h-[8.125rem] shadow-link rounded-xl">
              <p className="capitalize font-medium text-Medium_Gray">history</p>
              <p className="capitalize font-medium text-Medium_Gray">
                our team
              </p>
              <p className="capitalize font-medium text-Medium_Gray">blog</p>
            </div>
          )}
        </span>
      </div>

      <span>
        <a
          href="/"
          className="font-medium text-Medium_Gray hover:text-Almost_Black"
        >
          Careers
        </a>
      </span>
      <span>
        <a
          href="/"
          className="font-medium text-Medium_Gray hover:text-Almost_Black"
        >
          About
        </a>
      </span>
    </div>
  )
}

export default NavLinks
