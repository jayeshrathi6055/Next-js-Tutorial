import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [author, setauthor] = useState("");
  const [type, settype] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    var url = "http://localhost:3000/api/addBlog";
    var data = { title, content, author, type };
    var params = {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data), // It must be in string format
    };
    fetch(url, params)
    settitle("");
    setcontent("");
    setauthor("");
    settype("");
    router.push({
      pathname: "/",
    });
  };
  const getValue = (e) => {
    if (e.target.name == "title") {
      settitle(e.target.value);
    } else if (e.target.name == "content") {
      setcontent(e.target.value);
    } else if (e.target.name == "author") {
      setauthor(e.target.value);
    }
  };
  return (
    <>
      <form method="POST" onSubmit={Submit} className={styles.form}>
        <div>
          <label htmlFor="title">Title of your Blog</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              getValue(e);
            }}
            name="title"
            placeholder="Enter the title of your Blog"
            required
          />
        </div>
        <div>
          <label htmlFor="content">
            Content of your Blog(Content should be in html form)
          </label>
          <textarea
            name="content"
            id="content"
            cols="70"
            rows="30"
            value={content}
            placeholder="Enter your content in the form of html"
            required
            onChange={(e) => {
              getValue(e);
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="Author">Name of the Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter your Full Name"
            required
            value={author}
            onChange={(e) => {
              getValue(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="type">Blog Type</label>
          <input
            type="text"
            name="type"
            placeholder="Which type of blog you wrote? like - health,general etc."
            value={type}
            required
            onChange={(e) => {
              settype(e.target.value.toLowerCase());
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
