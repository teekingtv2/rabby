import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import DashboardBody from "../../components/dashboard/DashboardBody";
import useFetchCredential from "../../api/useFetchCredential";
import axios from "axios";
import NavBarDashboard from "../../components/dashboard/NavBarDashboard";
axios.defaults.withCredentials = true;

const DashboardPage = () => {
  const { data, loading } = useFetchCredential(`user-profile/user`);
  // const { data: transData, loading: transLoading } =
  //   useFetchCredential(`user-profile/transactions`);
  // const {
  //   data: walletData,
  //   loading: walletLoading,
  //   error: walletError,
  // } = useFetchCredential(`admin-auth/get-wallet-address`);

  return (
    <>
      <Head pageTitle="Welcome Home" />
      {data && (
        <>
          <NavBarDashboard userData={data.data} />
          <DashboardBody />
        </>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default DashboardPage;
