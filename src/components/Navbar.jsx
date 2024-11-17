import React from "react";
import { formatNumber } from "../utils/formatNumber";
import "../assets/css/styleNavbar.css";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="navbar flex justify-between pl-10 pr-10">
      <div>
        Pizzería Mamma Mía!{"     "}
        <Button className="ml-5 font-light border-white border-solid border pt-1 pb-1 pl-4 pr-4">
          🍕 Home
        </Button>
        {token ? (
          <>
            <Button className="ml-5 font-light border-white border-solid border pt-1 pb-1 pl-4 pr-4">
              🔓 Profile
            </Button>
            <Button className="ml-5 font-light border-white border-solid border pt-1 pb-1 pl-4 pr-4">
              🔓 Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="ml-5 font-light border-white border-solid border pt-1 pb-1 pl-4 pr-4">
              🔐 Login
            </Button>
            <Button className="ml-5 font-light border-white border-solid border pt-1 pb-1 pl-4 pr-4">
              🔐 Register
            </Button>
          </>
        )}
      </div>
      <div>
        <Button className="boton-precio">
          🛒 Total: <b>${formatNumber(total)}</b>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
