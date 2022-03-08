import React from 'react'

export const getStaticPaths = async ()=>{
    // Now I am taking page Number
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    const paths = data.map((element)=>{
        // In return "params" is a default argument
        return {
            params:{
                pageno:element.id.toString(),
            },
        }
    })
    // Here I return the Page Number
    // In return it is compulsory to give paths and fallback
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context)=>{
    // Here i am sending data as a props
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}

export default function pageNo({data}) {
    const {id,title,body} = data;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{body}</h2>
        </div>
    )
}
