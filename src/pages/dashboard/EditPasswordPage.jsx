import React from "react";
import Head from "../../components/Head";
import EditPasswordBody from "../../components/dashboard/EditPasswordBody";
import useFetchCredential from "../../api/useFetchCredential";
import NavBarDashboard from "../../components/dashboard/NavBarDashboard";

const EditPasswordPage = () => {
  const { data, loading } = useFetchCredential(`user-profile/user`);
  return (
    <>
      <Head pageTitle="Edit Your Password" />
      {data && (
        <>
          <NavBarDashboard userData={data?.data} />
          <EditPasswordBody data={data?.data} />
        </>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default EditPasswordPage;
