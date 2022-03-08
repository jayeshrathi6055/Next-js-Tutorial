import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function index() {
  return (
    <div>
        {/* It is compulsary to give width and height */}
        {/* Instead of width and height we can also give "layout = 'fill'" */}
      <Image src = "/favicon.ico" width = "100" height = "100"/>
      <Navbar />
    </div>
  );
}
