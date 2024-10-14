import React from "react";
import Head from "../../components/Head";
import useFetchCredential from "../../api/useFetchCredential";
import axios from "axios";
import NavBarDashboard from "../../components/dashboard/NavBarDashboard";
import MyRequestsBody from "../../components/dashboard/MyRequestsBody";
axios.defaults.withCredentials = true;

const MyRequestsPage = () => {
  const { data, loading } = useFetchCredential(`user-profile/user`);
  const { data: requestsData, loading: requestsLoading } = useFetchCredential(
    `user-profile/my-requests`
  );
  return (
    <>
      <Head pageTitle="My Requests" />
      {data && (
        <>
          <NavBarDashboard userData={data?.data} />
          <MyRequestsBody requestsData={requestsData?.data} />
        </>
      )}
      {loading && <div>Loading...</div>}
      {requestsLoading && <div>Loading...</div>}
    </>
  );
};

export default MyRequestsPage;
