import Lottie from "lottie-react";
import securityAccount from "./lotties/cloud-computing-security.json";

function AccountSetting() {
  return (
    <div className="accountSetting rounded-lg shadow-2xl mb-10 flex pt-3 pb-3">
      <div className="w-1/2 pl-10">
        <h1 className="text-4xl text-gray-400 font-extrabold">General Info</h1>
        <p className="text-sm text-gray-400 mb-5">
          You can change your info in here...
        </p>
        <input
          id="changeAvatar"
          type="file"
          accept="image/*"
          className="hidden"
        />
        <div className="changeAvatar w-[160px] h-[160px] overflow-hidden rounded-full relative my-5">
          <img
            className="object-cover w-full h-full"
            src="./user-default.jpeg"
            alt="avatar"
          />
          <label
            htmlFor="changeAvatar"
            className="absolute w-full h-full cursor-pointer top-0 left-0"
          />
        </div>
        <label
          htmlFor="changeAvatar"
          className="px-3 py-2 bg-[#A4D96C] cursor-pointer ml-4 rounded-full text-sm text-white hover:bg-[#1DC071]"
        >
          Change Avatar
        </label>

        <div className="formChangeDataUser space-y-6 mt-8">
          <div className="firstName">
            <label className="block text-sm text-gray-400 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the first name..."
            />
          </div>
          <div className="lastName">
            <label className="block text-sm text-gray-400 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the last name..."
            />
          </div>
          <div className="email">
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the your email..."
            />
          </div>
          <div className="address">
            <label className="block text-sm text-gray-400 mb-2">
              Your Address
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the your address..."
            />
          </div>
          <div className="numberPhone">
            <label className="block text-sm text-gray-400 mb-2">
              Number Phone
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
              placeholder="Enter the number phone..."
            />
          </div>
          <button className="px-8 py-2 rounded-lg bg-[#A4D96C] hover:bg-[#1DC071] focus:outline-none text-white mt-5 ml-auto">
            Save
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center content-center">
        <Lottie animationData={securityAccount} loop={true} autoplay={true} />
        <span className="text-sm text-gray-400">
          Note: Change personal information for better account security.
        </span>
      </div>
    </div>
  );
}

export default AccountSetting;
