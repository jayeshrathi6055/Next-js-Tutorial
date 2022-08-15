import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Styles from "../../../styles/Optum.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../../components/Card";
import Footer from "../../../components/Footer";
import Image from "next/image";
import HeaderImage from "../../../public/headerImage.jpg";

export default function Optum(){
  const goUp = useRef()
  useEffect(()=>{
    let menubar = document.getElementById("menuBar")
    let menubarChild = menubar.children;
    let el = document.querySelector("header div");
    let mobileNav = document.getElementsByClassName("mobileNav")[0]
    let heading = document.querySelector("#mobileHeading a")
    let divheight = document.getElementsByClassName("navLinks")[0].parentElement
    window.onscroll = ()=>{
      if(window.pageYOffset>=100){
        el.classList.add("stickyNav")
        mobileNav.style.backgroundColor = "white"
        mobileNav.style.color = "black"
        heading.style.color = "#003c71"
      }else if(window.pageYOffset<70){
        el.classList.remove("stickyNav");
        if(divheight.style.height = "0vh"){
          mobileNav.style.backgroundColor = "#003c71"
          mobileNav.style.color = "white"
          heading.style.color = "white"
          menubar.style.border = "none"
          if(menubarChild[0].classList.contains("activeIcon")){
            for(let el of menubarChild){
              el.classList.toggle("activeIcon");
            };
          }
        }
      }
      
      if(window.pageYOffset>800){
        goUp.current.style.visibility = "visible"
      }else{
        goUp.current.style.visibility = "hidden"
      }
    }
  },[])
  const goTop = ()=>{
    window.scrollTo(0,0)
  }
  return (
    <>
      <div className={Styles.general_page}>
        <Link href="https://www.unitedhealthgroup.com/content/uhg/en/search.html?query=*&facets=contenttype_s;uhg:content-type/general-page;GENERAL%20PAGE&sort=newest&rows=10&facetString=GENERAL%20PAGE">
          <a>General page</a>
        </Link>
        <h1>Optum</h1>
      </div>

      <div className={`${Styles.image}`}>
        <Image
          src={HeaderImage}
          alt="Optum image"
          loading="eager"
          priority={true}
        />
      </div>
      <main>
        
        <section className={Styles.about}>
          <h2>About Optum</h2>
          <p>
            Optum delivers care aided by technology and data, empowering people,
            partners and providers with the guidance and tools they need to
            achieve better health. Optum serves customers through three
            businesses.
          </p>
          <button className="vibrant_button">
            Visit Optum
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              style={{ color: "white" }}
            />
          </button>
        </section>
        <Card
          direction="row"
          image="/service_image.jpeg"
          heading="Optum Health"
          content="Optum Health provides care directly through local medical groups and ambulatory care systems, including primary, specialty, urgent and surgical care to 100 million consumers. This business also provides products and services that engage people in their health and help manage chronic, complex and behavioral health needs. Customers include employers, health systems, government and health plans."
          link="/"
        ></Card>
        <Card
          direction="row-reverse"
          image="/service_image.jpeg"
          heading="Optum Insight"
          content="Optum Insight provides data, analytics, research, consulting, technology and managed services solutions to hospitals, physicians, health plans, governments and life sciences companies. This business helps customers reduce administrative costs, meet compliance mandates, improve clinical performance and transform operations."
          link="/en"
        ></Card>
        <Card
          direction="row"
          image="/service_image.jpeg"
          heading="Optum Rx"
          content="Optum Rx offers a full spectrum of pharmacy care services that are making drugs more affordable and creating a better experience for consumers, filling roughly 1.3 billion adjusted scripts annually. Optum Rx solutions are rooted in evidence-based clinical guidelines. This business makes health care more affordable by helping people find the medications they need at the lowest price, while helping benefit sponsors pay the lowest net cost."
          link="/solutions/optumrx"
        ></Card>
      </main>
      <Footer></Footer>
      
      <div className={Styles.goUp} id="goUP" ref = {goUp}>
          <span onClick={goTop}>
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
          </span>
      </div>
    </>
  );
};
