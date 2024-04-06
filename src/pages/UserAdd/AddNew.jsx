import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
import FormField from "../../components/FormField";
import Dropdown from "../../components/Dropdown";
const { v4: uuidv4 } = require("uuid");

const AddNew = ({ onInfoEdit, Users, Roles, onchange, onItemAdded }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const user_id = uuidv4();
  const [User, setUser] = useState({ user_id });
  const GetRoleName = (id) => {
    const foundRole = Roles.find((role) => role.role_id === id);
    return foundRole ? foundRole.role_name : "";
    console.log("User");
  };
  console.log(User);
  const handleUserAdd = () => {
    if (User.role_name) {
      if (User.role_id) {
        onItemAdded("user", User);
      }
      setUser({ user_id });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        data-aos="fade-down"
        className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-4/5 flex flex-col md:flex-row"
      >
        <div className="flex-1 border-r border-orange-500 pr-5">
          <PageHeading Title="User" />
          <Divider />
          <form className="flex flex-col">
            <div className="flex justify-between">
              <FormField
                name="user_fullname"
                placeholder="Fullname"
                type="text"
                onChange={(e) =>
                  setUser({ ...User, [e.target.name]: e.target.value })
                }
              />
              <FormField
                name="user_password"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setUser({ ...User, [e.target.name]: e.target.value })
                }
              />
            </div>
            <FormField
              name="user_email"
              placeholder="Email"
              type="text"
              onChange={(e) =>
                setUser({ ...User, [e.target.name]: e.target.value })
              }
            />
            <Dropdown />
            <FormButton width="100%" value="Submit" onClick={handleUserAdd} />
          </form>
        </div>
        <div className="bg-[#D8D9DA] overflow-hidden ml-4 flex-1">
          <table className="w-full text-center border border-orange-500">
            <thead className=" bg-[#CECFD1] text-[#FF7D31] font-base font-bold">
              <tr>
                <th className="border-b border-orange-500">Full Name</th>
                <th className="border-b border-orange-500">Email</th>
                <th className="border-b border-orange-500">Role</th>
                <th className="border-b border-orange-500">User Info</th>
              </tr>
            </thead>
            <tbody className="border border-orange-500">
              {Users.map((User, index) => (
                <tr key={index}>
                  <td className="border-b border-r px-1 border-orange-500">
                    {User.user_fullname}
                  </td>
                  <td className="border-b border-r px-1 border-orange-500">
                    {User.user_email}
                  </td>
                  <td className="border-b border-r px-1 border-orange-500">
                    {GetRoleName(User.role_id)}
                  </td>
                  <td className="border-b border-r px-1 border-orange-500">
                    <button onClick={onInfoEdit} className="px-2 my-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-orange-500 hover:text-orange-600 bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
