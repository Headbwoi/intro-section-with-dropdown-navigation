import { useState } from "react"
import Icon from "../svgComponents/Icon"
import IconCloseMenu from "../svgComponents/IconCloseMenu"
import IconDown from "../svgComponents/IconDown"
import IconOpenMenu from "../svgComponents/IconOpenMenu"
import IconUp from "../svgComponents/IconUp"

function Header() {
  const [iconUp, setIconUp] = useState(true)

  return (
    <header className="pt-6 md:pt-7 lg:pt-8 relative">
      <nav className="px-px_header md:px-7 lg:px-10 flex items-center justify-between">
        {/* logo and dwsktop link tag */}
        <div className="flex items-center">
          <div className="mr-16">
            <Icon />
          </div>
          {/* links */}
          <div className="hidden lg:flex items-center space-x-10">
            <span className="flex items-center cursor-pointer">
              <a href="#" className="font-medium mr-2 text-Medium_Gray">
                Features
              </a>
              {iconUp && <IconDown />}
              {!iconUp && <IconUp />}
            </span>
            <span className="flex items-center cursor-pointer">
              <a href="#" className="font-medium mr-2 text-Medium_Gray">
                Company
              </a>
              {iconUp && <IconDown />}
              {!iconUp && <IconUp />}
            </span>
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
        </div>

        {/* login/register desktop */}
        <div className="hidden lg:flex space-x-10 items-center">
          <a href="/">Login</a>
          <a
            href="/"
            className="h-11 w-[108px] grid place-items-center border-2 border-Medium_Gray rounded-xl text-Medium_Gray font-medium"
          >
            Register
          </a>
        </div>

        {/* hamburger mobile */}
        <div className="hamburger lg:hidden cursor-pointer">
          <IconOpenMenu />
        </div>
        {/* mobile menu */}
        <div className="mobile-menu w-screen absolute top-0 right-0 bg-Medium_Gray/10 min-h-screen lg:hidden hidden">
          <div className="absolute right-0 w-[64.53%] h-full bg-white pt-5 px-6">
            <div className="flex mb-8 close">
              <div className="ml-auto cursor-pointer">
                <IconCloseMenu />
              </div>
            </div>

            <div className="flex items-start justify-start flex-col space-y-7 mb-10">
              <div className="flex items-center cursor-pointer">
                <a href="#" className="font-medium mr-2 text-Medium_Gray">
                  Features
                </a>
                {iconUp && <IconDown />}
                {!iconUp && <IconUp />}
              </div>
              <div className="flex items-center cursor-pointer">
                <a href="#" className="font-medium mr-2 text-Medium_Gray">
                  Company
                </a>
                {iconUp && <IconDown />}
                {!iconUp && <IconUp />}
              </div>
              <div>
                <a href="/" className="font-medium text-Medium_Gray">
                  Careers
                </a>
              </div>
              <div>
                <a href="/" className="font-medium text-Medium_Gray">
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4">
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
      </nav>
    </header>
  )
}

export default Header
