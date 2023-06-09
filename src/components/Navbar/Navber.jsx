import React, { useState } from "react";
import Link from "./Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Category 1", path: "/products/category1" },
  ];

  return (
    <div>
      <nav className="bg-text-purple">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-purple-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-purple-500" />
            )}
          </span>
        </div>

        <ul className={`md:flex duration-500 md:pt-4 md:static pl-8 pb-4 bg-purple-400 absolute ${open ? 'top-6' : '-top-36'}`}>
          {routes.map((route) => (
            <Link key={route.name} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
