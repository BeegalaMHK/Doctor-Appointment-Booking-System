import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserDate] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex-col gap-2 text-sm">
      <img
        className="w-36 rounded"
        src={userData.image}
        alt="User Profile Image"
      />
      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserDate((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          className="bg-gray-100 text-3xl font-medium max-w-60 mt-4"
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline ">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {/* Email */}
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          {/* Phone */}
          <p className="font-medium">Phone</p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setUserDate((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              className="bg-gray-100 max-w-60"
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 "
                type="text"
                onChange={(e) =>
                  setUserDate((prev) => ({
                    ...prev.address,
                    line1: e.target.value,
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                className="bg-gray-100 "
                type="text"
                onChange={(e) =>
                  setUserDate((prev) => ({
                    ...prev.address,
                    line2: e.target.value,
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) => {
                setUserDate((prev) => ({ ...prev, gender: e.target.value }));
              }}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserDate((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary  hover:text-white transition-all "
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary  hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
