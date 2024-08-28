import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleBold />,
  },
  {
    title: "Profile",
    icon: <FiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="h-screen grid grid-cols-12 w-screen px-38">
        <div className="col-span-3  pt-8 px-4">
          <div className="text-4xl flex justify-center items-center h-fit w-fit cursor-pointer transition-all hover:bg-gray-600 rounded-full ">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex gap-4 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
              <button className="bg-[#1d9bf0] p-3 font-semibold mt-5 rounded-full w-full ">
                Tweet
              </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
