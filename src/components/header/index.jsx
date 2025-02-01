import search from "../../assets/search.svg";
import create from "../../assets/create.svg";
import grid from "../../assets/grid.svg";
import notifacation from "../../assets/notifacation.svg";
import yourprfile from "../../assets/Profile Photo.svg";

const Header = () => {
  return (
    <div className="flex flex-col ">
      <div className="py-4 flex">
        <div className="flex items-center  rounded shadow-[0_1px_1px_0_#eee] border  border-[#ccc] w-[50%] mx-auto">
          <input
            type="text"
            placeholder="gaming"
            className="px-3 outline-none w-full"
          />
          <button className="bg-[#f4f4f4] px-3 py-1">
            <img className=" bg-transparent  " src={search} alt="" />
          </button>
          
        </div>
        <div className="flex gap-5  mr-5">
          <img src={create} alt="" />
          <img src={grid} alt="" />
          <img src={notifacation} alt="" />
          <img src={yourprfile} alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-center border-y border-[#e6e6e6] py-3">
        <div className="border border-[#000000] bg-[#000000] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  text-white ">all</p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">film</p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">Comedy</p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">Mix</p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">Music</p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">Cartoons </p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">game </p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">for you </p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">Cartoons </p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">game </p>
        </div>
        <div className="border border-[#d8d8d8] bg-[#f7f7f7] rounded-full w-fit px-4 py-1  flex items-center justify-center">
          <p className="text-[14px]  ">for you </p>
        </div>
        




      </div>
    </div>
  );
};

export default Header;
