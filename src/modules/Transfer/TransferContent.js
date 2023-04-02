import React from "react";
import Lottie from "lottie-react";
import securityAccount from "./lotties/cloud-computing-security.json";

const TransferContent = () => {
  return (
    <div className="accountSetting rounded-lg shadow-2xl mb-10 flex pt-3 pb-3">
      <div className="w-1/2 pl-10">
        <h1 className="text-4xl text-gray-400 font-extrabold">
          Transfer Money
        </h1>
        <p className="text-sm text-gray-400 mb-5">
          You can change your info in here...
        </p>
        <div className="formTranfer space-y-6 mt-8">
          <div className="recei-number">
            <label className="block text-sm text-gray-400 mb-2">
              Receiving Account Number
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the Receiving account number..."
            />
          </div>
          <div className="transfer-amount">
            <label className="block text-sm text-gray-400 mb-2">
              Transfer Amount
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the Transfer amount..."
            />
          </div>
          <div className="content">
            <label className="block text-sm text-gray-400 mb-2">Content</label>
            <textarea
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the Content..."
            />
          </div>
          <button className="px-8 py-2 rounded-lg bg-[#A4D96C] hover:bg-[#1DC071] focus:outline-none text-white mt-5 ml-auto">
            Send
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center content-center">
        <Lottie animationData={securityAccount} loop={true} autoplay={true} />
        <span className="text-sm text-gray-400">
          Note: Please double check the recipient's account number.
        </span>
      </div>
    </div>
  );
};

export default TransferContent;
