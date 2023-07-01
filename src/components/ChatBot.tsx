import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatBot = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="relative h-fit   mb-[13em] m-3 ">
      {isOpen ? (
        <>
          <div className="bg-[#D3D2D2] h-8/9 w-4/12 z-50 min-h-fi">
            <header className="bg-[#FFA500] w-full flex flex-row justify-start items-center h-16">
              <img
                src="/assets/coryde.png"
                alt=""
                className="w-[100px] h-[80px]  object-contain hover:cursor-pointer active:cursor-pointer"
              />
              <p className="text-white ml-[-50px] text-2xl">CoRyde</p>
            </header>

            <main className="overflow-scroll">
              <div className="flex flex-row justify-start items-center bg-[#808080] ml-4 w-8/12 welcomeDiv mt-5">
                <img
                  src="/assets/coryde.png"
                  alt=""
                  className="w-[90px] h-[70px]  object-contain hover:cursor-pointer active:cursor-pointer"
                />
                <p className="ml-[-40px]">
                  Welcome to CoRyde how can I assist you Today
                </p>
              </div>
              <div
                className="
    welcomeDiv2 bg-white ml-24 w-fit  m-3 py-3  pl-6  pr-2 align-middle"
              >
                <p>Welcome to CoRyde how can I assist you Today</p>
              </div>
              <div className="relative w-10/12  ">
                <input
                  type="text"
                  className="pl-4 pr-12 py-2 border border-gray-300 welcomeDiv3  bg-[#D9D9D9] m-3 h-16  focus:outline-none w-full"
                  placeholder="Note Down"
                />
                <button>
                <img
                    src="/assets/message.png"
                    alt="send message logo"
                    className=" w-9 h-6 absolute left-[430px] top-8"
                  />
                </button>
                 
              </div>
            </main>
          </div>
        </>
      ) : (
        <></>
      )}

      <div
        onClick={handleChatBot}
        className="bg-[#808080] rounded-2xl hover:cursor-pointer w-14 h-14 flex justify-center items-center absolute left-[550px]  bottom-[310px]"
      >
        {isOpen ? (
          <img src="/assets/chatBotOpen.png" className="w-8 h-8" />
        ) : (
          <img src="/assets/chatbot.png" className="w-8 h-8" />
        )}
      </div>
    </div>
  );
};

export default ChatBot;
