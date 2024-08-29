import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import FeedCard from "@/components/FeedCard";
import { FaMoneyBillWave } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

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
    title: "Twitter Blue",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Profile",
    icon: <FiUser />,
  },
  {
    title: "More Opt..",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="h-screen grid grid-cols-12 w-screen px-40">
        <div className="col-span-3 pt-8 pr-20">
          <div className="text-4xl flex justify-center p-2 items-center h-fit w-fit cursor-pointer transition-all hover:bg-gray-600 rounded-full ">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex gap-6 hover:bg-gray-600 rounded-full py-2 px-5 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
              <button className="bg-[#1d9bf0] py-3 px-2 font-semibold mt-5 rounded-full w-full ">
                Tweet
              </button>
          </div>
        </div>
        <div className="col-span-5 h-screen overflow-scroll  border-r-[1px] border-l-[1px]  border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />


        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
