import React from 'react'

// Fetch Data using getStaticProps
export const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    // It is neccessary to return like this
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
                    <h3>{element.title}</h3>
                </div>
            })}
        </div>
    )
}
