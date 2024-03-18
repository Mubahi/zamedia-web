import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import PageHeading from "../components/PageHeadng";
import Divider from "../components/Divider";
import FormButton from "../components/FomButton";
import FormFields from "../components/FormFields";
const Modules = (Title) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-md w-96"
      >
        <PageHeading Title="Modules" />
        <Divider />
        <form>
          <FormFields
            name="Module Title"
            placeholder="Module Title"
            required={true}
          />
          <FormFields
            name="Module Name"
            placeholder="Module Name"
            required={true}
            className="mt-4"
          />
        </form>
        <FormButton Title="Submit" />
      </div>
    </div>
  );
};
export default Modules;
