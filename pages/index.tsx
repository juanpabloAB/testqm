import Head from "next/head";
import React from "react";

import Banner from "../components/home/Banner";
import MainView from "../components/home/MainView";

const Home = () => (
  <>
    <Head>
      <title>Home | QM Repo Challenge</title>
      <meta
        name="description"
        content="GLHF :D"
      />
    </Head>
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
