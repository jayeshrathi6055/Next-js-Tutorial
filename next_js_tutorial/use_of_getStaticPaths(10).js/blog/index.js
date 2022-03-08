import React from 'react'
import Link from 'next/link'

// Fetch Data using getStaticProps
export const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}

export default function Blog({data}) {

    return (
        <div>
            {
            data.map((element)=>{
                return <div key = {element.id}>
                    <h2>{element.id}</h2>
                    <Link href = {`/blog/${element.id}`}>
                    <h3 style = {{cursor:"pointer",color:"blue"}}>{element.title}</h3>
                    </Link>
                </div>
            })}
        </div>
    )
}
