import React from "react";
import Head from "../../components/Head";
import useFetchCredential from "../../api/useFetchCredential";
import axios from "axios";
import EditProfileBody from "../../components/dashboard/EditProfileBody";
import NavBarDashboard from "../../components/dashboard/NavBarDashboard";
axios.defaults.withCredentials = true;

const EditProfilePage = () => {
  const { data, loading } = useFetchCredential(`user-profile/user`);
  return (
    <>
      <Head pageTitle="Edit Your Profile" />
      {data && (
        <>
          <NavBarDashboard userData={data?.data} />
          <EditProfileBody data={data?.data} />
        </>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default EditProfilePage;
