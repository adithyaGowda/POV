import React from "react";
import {
  Navbar,
  Button,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header>
      <Navbar className=" sticky w-full px-5 md:px-[150px] flex flex-col py-2 rounded-none text-[15px] max-w-full ">
        <div className=" w-full flex items-center justify-between text-blue-gray-900">
          <div className="flex flex-row">
            <img src="/logo.png" alt="logo" className=" h-12 w-full mr-8" />
            <div className="hidden lg:block"></div>
          </div>
          <div className="hidden gap-2 lg:flex space-x-4">
            <p className=" cursor-pointer font-bold  text-[15px]">
              <a href="#home">Home</a>
            </p>
            <p className=" cursor-pointer font-bold  text-[15px]">
              <a href="#menu">Menu</a>
            </p>
            <p className=" cursor-pointer font-bold text-[#7d7d7d] outline-[#000000] text-[15px]">
              <a href="#footer">Contact Us</a>
            </p>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div>
          <MobileNav open={openNav}>
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <a href="#home">Home</a>
              </Button>
              <Button fullWidth variant="text" size="sm" className="">
                <a href="#menu">Menu</a>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <a href="#footer">Contact Us</a>{" "}
              </Button>
            </div>
          </MobileNav>
        </div>
      </Navbar>
    </header>
  );
}
