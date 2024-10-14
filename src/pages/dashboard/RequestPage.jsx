import React from "react";
import Head from "../../components/Head";
import useFetchCredential from "../../api/useFetchCredential";
import axios from "axios";
import NavBarDashboard from "../../components/dashboard/NavBarDashboard";
import RequestServiceBody from "../../components/dashboard/RequestServiceBody";
import { useLocation } from "react-router-dom";
axios.defaults.withCredentials = true;

const RequestPage = () => {
  const { state } = useLocation();
  // const { state } = props.location;
  console.log("state", state);
  // console.log("state", state);
  const { data, loading } = useFetchCredential(`user-profile/user`);
  return (
    <>
      <Head pageTitle="Request for a New Service" />
      {data && (
        <>
          <NavBarDashboard userData={data?.data} />
          <RequestServiceBody data={state?.item} />
        </>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default RequestPage;
