import React from 'react'
import Link from 'next/link'
import useSWR from 'swr';

// Fetch data using useSWR
const fetcher = (url)=>fetch(url).then((res)=>res.json());

export default function Blog() {
    const {data} = useSWR("https://jsonplaceholder.typicode.com/posts/", fetcher);
    return (
        <div>
            <h1>My all blogs</h1>
            {data ?
            data.map((element)=>{
                return <div key = {element.id}>
                    <h2>{element.id}</h2>
                    <Link href = {`/blog/${element.id}`}>
                    <h3 style = {{cursor:"pointer",color:"blue"}}>{element.title}</h3>
                    </Link>
                </div>
            }):""}
        </div>
    )
}
