import React from "react";
import { TiHome } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiShoppingBag } from "react-icons/bi";
import { PiMusicNote } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { RiNewsLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { MdOutlineFeedback } from "react-icons/md";

function SideBar() {
  return (
    <aside className="w-45 p-2 text-xs ">
      <ul className="space-y-1.5">
        <span className="flex gap-4 items-center hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <TiHome />
          </span>
          <h1 className="font-semibold">Home</h1>
        </span>
        <hr className="text-gray-300" />
        <h2 className="font-semibold hover:bg-gray-100 p-2.5 rounded-lg">
          Subscriptions
        </h2>
        <hr className="text-gray-300" />
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <FaHistory />
          </span>
          <span>History</span>
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <CgPlayList />
          </span>{" "}
          Playlists
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <MdOutlineWatchLater />
          </span>{" "}
          Watch later
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <AiOutlineLike />
          </span>{" "}
          Liked videos
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <GoVideo />
          </span>{" "}
          Your videos
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <LiaDownloadSolid />
          </span>{" "}
          Downloads
        </li>
        <hr className="text-gray-300" />
        <h2 className="font-semibold hover:bg-gray-100 p-2.5 rounded-lg">
          Explore
        </h2>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <BiShoppingBag />
          </span>{" "}
          Shopping
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <PiMusicNote />
          </span>{" "}
          Music
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <CiStreamOn />
          </span>
          Live
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <SiYoutubegaming />
          </span>{" "}
          Gaming
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <RiNewsLine />
          </span>
          News
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <GoTrophy />
          </span>
          Sports
        </li>
        <hr className="text-gray-300" />
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <IoSettingsOutline />
          </span>
          Settings
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <CiFlag1 />
          </span>
          Report history
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <LuBadgeHelp />
          </span>
          Help
        </li>
        <li className="flex gap-4 items-center text-[12px] hover:bg-gray-100 p-2.5 rounded-lg">
          <span className="text-xl">
            <MdOutlineFeedback />
          </span>
          Send Feedback
        </li>
      </ul>
      <hr className="text-gray-300" />
      <div className="flex text-xs flex-wrap gap-2 text-gray-600 p-1">
        <p>About</p>
        <p>Press</p>
        <p>Copyright</p>
        <p>Contect us</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Policy & Safety</p>
        <p>Test New Features</p>
        <p>© 2026 YouTube Clone</p>
        <p>Developer: Mohammed Tosif</p>
      </div>
    </aside>
  );
}

export default SideBar;
