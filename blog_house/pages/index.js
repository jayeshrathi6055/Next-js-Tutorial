import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import react,{useState} from "react";
import Link from 'next/link'

export default function Home(props) {
  const [blogs,setBlogs] = useState(props.data);
  
  return (
    <>
      {/* Head Tags */}
      <Head>
        <title>Blog House</title>
      </Head>

      <main>

        <section className={styles.blogs}>
          <h1>Popular Blogs</h1>
          <div className={styles.allPopularBlogs}>
            {
            ((blogs).map((el)=>{
              return(<div className={styles.card} key={el.key}>
              <Image
                src="/../public/favicon.ico"
                width={150}
                height={150}
              ></Image>
              <Link href={`/${el.slug}`}>
                <a className={styles.blogLink}>{el.title.slice(0,100)}{el.title.length>100?"...":""}</a>
                </Link>
            </div>)
            }))
            }
          </div>
        </section>

        <section className={styles.blogs}>
          <h1>Health Blogs</h1>
          <div className={styles.allPopularBlogs}>
            {
            blogs.map((el)=>{
              return(
                <>
                {el.type=="health"?<div className={styles.card} key={`h${el.key}`}>
              <Image
                src="/../public/favicon.ico"
                width={150}
                height={150}
              ></Image>
              <Link href={`/${el.slug}`}>
                <a className={styles.blogLink}>{el.title.slice(0,100)}{el.title.length>100?"...":""}</a>
                </Link>
            </div>:undefined}
            </>
              )
            })
            }
          </div>
        </section>

        <section className={styles.blogs}>
          <h1>Coding Blogs</h1>
          <div className={styles.allPopularBlogs}>
            {
            blogs.map((el)=>{
              return(
                <>
                {el.type=="coding"?<div className={styles.card} key={`h${el.key}`}>
              <Image
                src="/../public/favicon.ico"
                width={150}
                height={150}
              ></Image>
              <Link href={`/${el.slug}`}>
                <a className={styles.blogLink}>{el.title.slice(0,100)}{el.title.length>100?"...":""}</a>
                </Link>
            </div>:undefined}
            </>
              )
            })
            }
          </div>
        </section>

        <section className={styles.blogs}>
          <h1>Psychology Blogs</h1>
          <div className={styles.allPopularBlogs}>
            {
            blogs.map((el)=>{
              return(
                <>
                {el.type=="psychology"?<div className={styles.card} key={`p${el.key}`}>
              <Image
                src="/../public/favicon.ico"
                width={150}
                height={150}
              ></Image>
              <Link href={`/${el.slug}`}>
                <a className={styles.blogLink}>{el.title.slice(0,100)}{el.title.length>100?"...":""}</a>
                </Link>
            </div>:undefined}
            </>
              )
            })
            }
          </div>
        </section>
      </main>
    </>
  );
};


export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/allBlogs");
  data = await data.json();
  data.reverse();
return {
  props: {data},
}
}