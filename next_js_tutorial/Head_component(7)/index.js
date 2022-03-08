import React from "react";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charset="utf-8" />
        <title>Index page</title>
        <meta name="next-head-count" content="4" />
      </Head>
      <Navbar />
    </div>
  );
}
