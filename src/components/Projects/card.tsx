/** @format */

import Image from "../../assets/projects/image.png";

const Card = () => {
  return (
    <div className="max-w-[250px] w-full p-[10px] bg-neutral-800 transition-all hover:rounded hover:ring-1 ring-cyan-400 my-1 mx-auto">
      <img className="mb-[10px]" src={Image} alt="teste" />
      <p className="h-[86px] line-clamp-6 overflow-hidden text-ellipsis over mb-6 font-light text-xs text-white leading-[14px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy
      </p>

      <div className="flex  justify-between space-x-[10px]">
        <a
          href="/"
          className="w-full cursor-pointer rounded max-w-[110px] transition-all flex justify-center items-center h-[30px] ring-1 ring-cyan-400 text-white font-semibold text-sm  hover:bg-cyan-400 "
        >
          Web Site
        </a>
        <a
          href="/"
          className="w-full cursor-pointer rounded max-w-[110px] transition-all flex justify-center items-center h-[30px] ring-1 ring-cyan-400 text-white font-semibold text-sm  hover:bg-cyan-400 "
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
export default Card;
