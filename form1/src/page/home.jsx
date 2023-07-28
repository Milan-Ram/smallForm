import React from "react";
import { LuCopy } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Home = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const handleCopy = () => {
      navigator.clipboard.writeText(" 4YzQqxxw8uPjBUELoupJjfvE3Zyy3eCmbVc5yuzBLp9p")
      setIsCopied(true)
      setTimeout(() => {
          setIsCopied(false)
          
      }, 3000);
  };
  return (
    <div className="w-full h-fit lg:h-screen flex items-center  bg-[#f9f9fb] justify-center overflow-y-scroll xl:overflow-y-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center pt-5 lg:pt-0  gap-10  w-[95%] lg:w-[80%]">
        <div className="w-[95%] lg:w-fit">
          <img
            alt="Cyberpunk"
            src="/main.webp"
            className="relative object-cover col-span-1 shadow-md aspect-square  self-start lg:ml-auto lg:mx-0 lg:self-center w-full max-h-[400px] lg:max-h-max lg:w-[440px] lg:h-[440px] xl:w-[488px] xl:h-[488px]"
            style={{ color: "transparent", borderRadius: "8px" }}
          />
          <div>
            <h2 className="font-bold text-custom-text-primary  m-0 text-lg md:text-2xl mt-6 mb-2 text-inherit">
              About the Collection
            </h2>
            <div className="flex items-center mb-6 text-sm text-inherit opacity-80">
              Contact Address:{" "}
              <p className="w-[80px] overflow-hidden">
                4YzQqxxw8uPjBUELoupJjfvE3Zyy3eCmbVc5yuzBLp9p
              </p>{" "}
              {!isCopied ? (
                <LuCopy
                  onClick={handleCopy}
                  className="text-md text-inherit ml-3 opacity-80 cursor-pointer"
                />
              ) : (
               <div className="flex items-center"><LuCopy className="text-md text-inherit ml-3 mr-1 text-green-700 cursor-pointer" />copied </div>
              )}
            </div>
            <p className=" text-sm text-inherit w-[85%] opacity-80">
              Demo collection showcasing how easy it is to purchase NFTs with
              Crossmint.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-9 shadow-lg h-full w-[98%] md:w-[95%] lg:w-[55%] xl:w-[45%] p-3 md:p-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-custom-text-primary md:text-xl xl:text-2xl text-inherit">
                Cyberpunk
              </p>
              <p className=" text-sm text-inherit opacity-80">Chain: Solana</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-custom-text-primary md:text-xl xl:text-2xl text-inherit">
                0.000001 SOL
              </p>
              <p className=" text-sm text-inherit opacity-80 text-right">
                $0.9
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6 w-full items-center">
            <label htmlFor="quantity" className="text-left -mb-4 self-start">
              Quantity
            </label>
            <select
              id="quantity"
              name="quantity"
              className="p-2 rounded-md border border-[#00000046] w-full"
              label="Select Version"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>4</option>
            </select>
            <label htmlFor="address" className="self-start -mb-4">
              Delivery address (Optional)
            </label>
            <input
              className="p-3 rounded-md border border-[#00000026] w-full"
              name="address"
              id="address"
              type="text"
            />
            <p className="text-xs  opacity-80">
              If you do not fill in this field, we will generate a custodial
              wallet for you. You will be able to access your NFTs via
              crossmint.com
            </p>
            <div className="flex w-full flex-col gap-3 items-center">
              <button className="bg-[#36b37e] text-white flex items-center justify-center  gap-2 font-medium py-3 w-full rounded-md">
              <img src="logo1.svg" alt="logo2" className="w-[25px] h-[25px] object-cover "/> 
                Buy with credit card
              </button>
              <button className=" font-medium py-3 w-full flex items-center justify-center gap-2 rounded-md text-black border border-black">
              <img src="logo2.png" alt="logo2" className="w-[25px] h-[25px] object-cover"/> Buy with ETH
              </button>
              <button className=" font-medium py-3 w-full flex items-center justify-center gap-2 rounded-md text-black border border-black">
              <img src="logo3.jfif" alt="logo3" className="w-[25px] h-[25px] object-cover"/> 
                Buy with SOL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
