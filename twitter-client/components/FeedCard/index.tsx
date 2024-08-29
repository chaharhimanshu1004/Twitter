import React from "react";
import Image from "next/image";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = () => {
  return (
    <div className="border  border-r-0 border-b-0 border-l-0 border-gray-600 p-5 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid gap-3 grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            height={50}
            width={50}
            alt="user image"
          />
        </div>
        <div className="col-span-11">
          <h5>Himanshu chahar</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero, eius!
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[80%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
            <CiHeart />
            </div>
            <div>
            <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
