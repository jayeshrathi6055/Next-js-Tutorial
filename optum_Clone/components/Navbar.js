import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faSearch,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const mobileNav = (e)=>{
    let menubar = document.getElementById("menuBar")
    let menubarChild = menubar.children;
    let mobileNav = document.getElementsByClassName("mobileNav")[0]
    let heading = document.querySelector("#mobileHeading a")
    let divheight = document.getElementsByClassName("navLinks")[0].parentElement
    console.log(menubarChild)
    for(let el of menubarChild){
      el.classList.toggle("activeIcon");
    };
    if(divheight.style.height == "60vh"){
      mobileNav.style.backgroundColor = "#003c71"
      mobileNav.style.color = "white"
      heading.style.color = "white"
      divheight.style.height = "0vh";
    }else{
      mobileNav.style.backgroundColor = "white"
      mobileNav.style.color = "black"
      heading.style.color = "#003c71"
      divheight.style.height = "60vh";
    }
    if(!menubar.style.border || menubar.style.border=="none"){
      menubar.style.border = "1px solid red"
      menubar.style.padding = "0.4rem"
    }else{
      menubar.style.border = "none"
    }
  }
  const activeEffect = (e) => {
    let elements =
      document.getElementsByClassName("active")[0].parentElement.children;
    for (let item of elements) {
      if (item == e.target) {
        item.classList.add("active");
      } else {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      }
    }
  };
  return (
    <>
      <header id="desktop">
        <div>
          <ul className={`flex`}>
            <li>
              <Link href="careers.unitedhealthgroup.com/">
                <a>Careers</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
            <li>
              <Link href="https://www.optum.com/">
                <a>Optum</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
            <li>
              <Link href="https://www.uhc.com/">
                <a>UnitedHealthCare</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
          </ul>

          <nav className="flex">
            <h2>
              <Link href="content/uhg">UNITEDHEALTHGROUP*</Link>
            </h2>
            <ul className="flex">
              <li className="active" onClick={(e) => activeEffect(e)}>
                Who We Are
              </li>
              <li onClick={(e) => activeEffect(e)}>What We Do</li>
              <li onClick={(e) => activeEffect(e)}>Insights & Solutions</li>
              <li onClick={(e) => activeEffect(e)}>Newsroom</li>
              <li className="" onClick={(e) => activeEffect(e)}>
                Sustainability
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </li>
            </ul>
            <span>
              <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer" }} />
            </span>
          </nav>
        </div>
      </header>

      <header id="mobile">
        <nav className="mobileNav">
          <span id="menuBar" onClick={()=>{mobileNav()}}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faXmark}  className="activeIcon"></FontAwesomeIcon>
          </span>
          <h2 id="mobileHeading">
            <Link href="content/uhg">UNITEDHEALTHGROUP*</Link>
          </h2>
          <span>
            <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer" }} />
          </span>
        </nav>

        <div>
          <ul className="navLinks">
            <hr />
            <li className="active" onClick={(e) => activeEffect(e)}>
              Who We Are
            </li>
            <hr />
            <li onClick={(e) => activeEffect(e)}>What We Do</li>
            <hr />
            <li onClick={(e) => activeEffect(e)}>Insights & Solutions</li>
            <hr />
            <li onClick={(e) => activeEffect(e)}>Newsroom</li>
            <hr />
            <li className="" onClick={(e) => activeEffect(e)}>
              Sustainability
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </li>
            <hr />
          </ul>

          <ul className="anotherLinks">
            <li>
              <Link href="careers.unitedhealthgroup.com/">
                <a>Careers</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
            <li>
              <Link href="https://www.optum.com/">
                <a>Optum</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
            <li>
              <Link href="https://www.uhc.com/">
                <a>UnitedHealthCare</a>
              </Link>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "white" }}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
