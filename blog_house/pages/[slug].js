import React from "react";
import styles from "../styles/Slug.module.css";
import Head from "next/head";

const Slug = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(slug,`http://localhost:3000/api/getBlog?query=${slug}`)
  let data = await fetch(`http://localhost:3000/api/getBlog?query=${slug}`);
  data = await data.json();
  return {
    props: { data },
  };
}

export default Slug;
