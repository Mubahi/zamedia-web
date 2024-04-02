import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FormButton from "../components/FomButton";
import FormField from "../components/FormField";
import PageHeading from "../components/PageHeadng";
const LoginForm = ({ onLogin }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("001");
  return (
    <div className="container mx-auto flex justify-center items-center h-screen py-40 bg-slate-100">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#D8D9DA] rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-slate-300 to-slate-400 rounded-ee-full">
          <div className="" data-aos="zoom-out">
            <img src="zamedia.png" className="w-68" alt="za-media-logo" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-16 px-12">
          <PageHeading Title="Enter Your Credentials" />
          <form action="#">
            <FormField
              name="Email"
              placeholder="Email"
              required={true}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormField
              name="Password"
              placeholder="Password"
              required={true}
              className="mt-4"
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <FormButton
            onClick={() => onLogin(Email, Password, Role)}
            Title="LOGIN"
          ></FormButton>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
