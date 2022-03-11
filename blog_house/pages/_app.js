import Link from "next/link";
import "../styles/globals.css";
import { useRouter } from "next/router";
import react,{useEffect, useState} from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [query,setquery] = useState("")
  const firstRun = ()=>{
    if (router.pathname == "/contact"){
      document.getElementById("contact").style.borderBottom = "1px solid black";
      document.getElementById("about").style.borderBottom = "none";
      document.getElementById("home").style.borderBottom = "none";
    }
    else if (router.pathname == "/about"){
      document.getElementById("about").style.borderBottom = "1px solid black";
      document.getElementById("contact").style.borderBottom = "none";
      document.getElementById("home").style.borderBottom = "none";
    }
    else{
      document.getElementById("home").style.borderBottom = "1px solid black";
      document.getElementById("about").style.borderBottom = "none";
      document.getElementById("contact").style.borderBottom = "none";
    }
  }
  useEffect(()=>{
    firstRun();
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    router.push({
      pathname:"/search",
      query:{search:query}
    })
    setquery("")
  }
  return (
    <>
    {/* Head Tags */}
    <Head>
      <title>Blog House</title>
    </Head>

      {/* Navigation Bar */}
      <nav>
        <div className="logo">
          <h1>BLOG HOUSE</h1>
        </div>
        <ul>
          <li id="home">
            <Link href="/">Home</Link>
          </li>
          <li id="about">
            <Link href="/about">About</Link>
          </li>
          <li id="contact">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search any Blog" name = "search" value = {query} onChange = {(e)=>{setquery(e.target.value)}} required />
          <button type="submit">Search</button>
        </form>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;