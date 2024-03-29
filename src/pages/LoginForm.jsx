import React from "react";
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
  return (
    <div className="flex justify-center items-center h-screen py-40 bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-yellow-300 to-orange-300 rounded-ee-full">
            <div className="" data-aos="zoom-out">
              <img src="zamedia.png" className="w-68" alt="za-media-logo" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <PageHeading Title="Enter Your Credentials" />
            <form action="#">
              <FormField
                name="Username..."
                placeholder="Username..."
                required={true}
                type="text"
              />
              <FormField
                name="Password......"
                placeholder="Password......"
                required={true}
                className="mt-4"
                type="Password"
              />
            </form>
            <FormButton onClick={onLogin} Title="Login"></FormButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
