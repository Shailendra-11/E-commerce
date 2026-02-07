
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button"
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <>
      <div className="bg-[#002147] h-25 flex justify-center ">
        <nav className="fixed z-999 top-1 w-[70%] mt-5 flex items-center justify-between bg-[#04182f] text-[#fff] p-2.5 rounded-md shadow-md">
          <div className="cursor-pointer">
          <NavLink to="/" >
          <img src="/logo.png" alt="logo" className="w-13 h-10 object-cover" />
          </NavLink>
          </div>
          <ul className="flex items-center gap-3.5 cursor-pointer">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-shadow-white"
              }>Home</NavLink>
            </li>

            <li>
              <NavLink to="/product" className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-shadow-white"
              }>Product</NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-shadow-white"
              }>About</NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-shadow-white"
              }>Contact</NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-4 cursor-pointer">
            <li><ShoppingCart /></li>
            <Button variant="destructive">Get Setting</Button>
          </ul>

        </nav>
      </div>
    </>

  )
}

export default Header