import React from "react";
import { FaBriefcaseMedical, FaLock, FaMousePointer } from "react-icons/fa";

import Navbar from "../components/NavbarDeposit";
import HeroDeposit from "../components/HeroDeposit";

const Deposit = () => {
  const icons = [FaBriefcaseMedical, FaLock, FaMousePointer];
  return (
    <>
      <Navbar />
    <HeroDeposit /> 

    </>
  );
};
export default Deposit;
