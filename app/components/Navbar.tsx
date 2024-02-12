"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUser, faNavicon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex  sm:flex-row h-20 bg0 bg-blue-950 justify-between sm:h-16 p-2   px-8">
      <div className="flex gap-4 items-center flex-1">
        <FontAwesomeIcon
          icon={faNavicon}
          size="sm"
          className="h-8 w-8 text-slate-400"
        />
        {/* <Link className="font-bold p-1" href="/home">
          DASHBOARD
        </Link>
        <Link className="font-bold p-1" href="/contact">
          CONTACT
        </Link> */}
      </div>

      {pathName !== "/home" && ( // Conditionally render Image
        <div className="flex relative w-[80px] aspect-square">
          <Image
            src={"/logo-expanzo.svg"}
            className="object-contain"
            fill
            alt="img"
          />
        </div>
      )}

      <div className="flex gap-2 items-center flex-1 sm:justify-end">
        <div className="rounded-full h-8 w-8 bg-slate-400 flex items-center justify-center ">
          <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-white" />
        </div>
        <p className="font-thin cursor-pointer  pe-4">LOGIN</p>
        <div className="rounded-full h-8 w-8 bg-slate-400 flex items-center justify-center">
          <FontAwesomeIcon icon={faPencil} className="h-4 w-4 text-white" />{" "}
        </div>
        <p className="font-thin cursor-pointer">SIGNUP</p>
      </div>
    </div>
  );
};

export default Navbar;
