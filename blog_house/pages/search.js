import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Search = (props) => {
    const router = useRouter();
    // let searchItem = router.query.search;
    let blogs = props.blog;
  return (
    <>
    <section className={styles.blogs}>
          <h1>Search Results</h1>
          <div className={styles.allPopularBlogs}>
            {
            ((blogs).map((el,index)=>{
              return(<div className={styles.card} key={index}>
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
    </>
  )
}

export async function getServerSideProps(context) {
    let searchItem = context.query.search;
    let data = await fetch("http://localhost:3000/api/allBlogs");
    data = await data.json();
    let blog = [];
    for (let i of data){
        if (((i.title).toLowerCase()).includes(searchItem.toLowerCase())){
            blog.push(i);
        }
    }
  return {
    props: {blog},
  }
  }

export default Search