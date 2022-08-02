import { useState } from "react"
import Icon from "../icons/Icon"
import IconDown from "../icons/IconDown"
import IconOpenMenu from "../icons/IconOpenMenu"
import MobileMenu from "./MobileMenu"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="px-px_header md:px-7 lg:px-10 flex items-center justify-between">
      {/* logo and dwsktop link tag */}
      <div className="flex items-center">
        <div className="mr-16">
          <Icon />
        </div>

        {/* links */}
        <div className="hidden lg:flex items-center space-x-10">
          <NavLinks />
        </div>
      </div>
      {/* login/register desktop */}
      <div className="hidden lg:flex space-x-10 items-center ">
        <a
          href="/"
          className="text-Medium_Gray font-medium hover:text-Almost_Black"
        >
          Login
        </a>
        <a
          href="/"
          className="h-11 w-[108px] grid place-items-center border-2 border-Medium_Gray rounded-xl text-Medium_Gray font-medium hover:text-Almost_Black hover:border-Almost_Black"
        >
          Register
        </a>
      </div>
      {/* hamburger mobile */}
      <div
        className="hamburger lg:hidden cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <IconOpenMenu />
      </div>

      {openMenu && (
        <>
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
      )}
    </nav>
  )
}

export default Navbar
