import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdDescription,
  MdComment,
  MdNoteAdd
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  const btns = [
    {
      icon: <AiFillHome />,
      name: "Home",
      to: "/",
    },
    { icon: <MdSubscriptions />, name: "Subscriptions", to: "/" },
    { icon: <MdVideoLibrary />, name: "Library", to: "/" },
    { icon: <MdDescription />, name: "Notes", to: "/" },
    { icon: <RiVideoFill />, name: "Interview", to: "/" },
    { icon: <MdComment />, name: "Community", to: "/" },
    { icon: <MdNoteAdd />, name: "Assignment", to: "/" },
  ];
  const SideBtn = ({ icon, btnName }) => {
    return (
      <button className="flex items-center p-2 px-5 w-full my-2 justify-start hover:bg-gray-200 rounded-lg">
        <span className="mr-2">{icon}</span> {btnName}
      </button>
    );
  };
  if (!isMenuOpen) return null;
  return (
    <div className="w-52 mx-1 hidden md:block">
      {btns.map((btn, i) => {
        return (
          <Link key={i} to={btn.to}>
            <SideBtn icon={btn.icon} btnName={btn.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
