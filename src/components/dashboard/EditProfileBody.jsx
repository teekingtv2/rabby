import React from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateUpdateProfile } from "../../utils/validate";
import { updateProfileValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import SelectCountryField from "../forms/SelectCountryField";
import SelectNetworkField from "../forms/SelectNetworkField";
import { errorNotification, successNotification } from "../../utils/helpers";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
axios.defaults.withCredentials = true;

const EditProfileBody = ({ data }) => {
  const initialValues = updateProfileValues(data);
  const validationSchema = validateUpdateProfile();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    const payload = {
      name: values.name,
      country: values.country,
      phone: values.phone,
    };

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/user-profile/update-profile`,
      payload,
      { withCredentials: true }
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        history("/dashboard");
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div className="h-full md:h-[80vh] w-[100vw] bg-[#0A0D16]">
        <div className="max-w-[600px] mx-auto pt-[80px] pb-[170px] md:py-0 px-5 md:px-0 flex flex-col h-full justify-center gap-8 bg-[#0A0D16]">
          <div className="flex justify-between items-center">
            <div className="text-[18px] md:text-[25px] font-bold">
              Edit your profile
            </div>
            <Link
              className="py-1 px-2 flex gap-2 justify-center items-center rounded-full text-[12px] md:text-[14px]"
              style={{ border: "1px dashed #fff" }}
              to="/dashboard"
            >
              Go back
              <FaArrowLeft />
            </Link>
          </div>
          <div className="overflow-x-scroll pt-8 pb-2">
            <div className="w-[100%]">
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="font-bold text-[14.5px] md:text-[18px] uppercase grid grid-cols-1 gap-8 md:grid-cols-2 w-[100%] p-2 mb-2">
                  <InputField name="name" placeholder="Your full name" />
                  <InputField name="email" disabled={true} />
                  <InputField name="phone" placeholder="Your phone number" />
                  <SelectCountryField name="country" />
                </div>
                <SubmitButton
                  title="Update profile"
                  className="mt-10 w-[100%]"
                />
              </CustomFormik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileBody;
